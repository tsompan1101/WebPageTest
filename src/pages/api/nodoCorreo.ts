import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const allowedInterestedTypes = new Set([
  'Persona física',
  'Persona moral',
  'Operador existente',
  'Propietario de predio',
  'Inversionista',
]);

const allowedProjectTypes = new Set(['Nueva estación', 'Conversión', 'Por definir']);
const allowedPropertyStatus = new Set(['Sí', 'No', 'En negociación']);

function text(value: FormDataEntryValue | null): string {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function requiredEnv(name: string): string {
  const value = import.meta.env[name];
  if (!value) throw new Error(`Falta la variable de entorno ${name}`);
  return value;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    if (!request.headers.get('content-type')?.includes('multipart/form-data')) {
      return new Response(JSON.stringify({ message: 'Formato de solicitud no válido.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const form = await request.formData();

    // Campo señuelo para bots.
    if (text(form.get('website'))) {
      return new Response(JSON.stringify({ message: 'Registro recibido.' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const name = text(form.get('name'));
    const email = text(form.get('email')).toLowerCase();
    const phone = text(form.get('phone'));
    const municipality = text(form.get('municipality'));
    const locality = text(form.get('locality'));
    const interestedType = text(form.get('interestedType'));
    const projectType = text(form.get('projectType'));
    const propertyStatus = text(form.get('propertyStatus'));
    const location = text(form.get('location'));
    const privacyConsent = text(form.get('privacyConsent'));

    if (!name || !email || !phone || !municipality || !locality || !interestedType || !projectType || !propertyStatus) {
      return new Response(JSON.stringify({ message: 'Completa todos los campos obligatorios.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return new Response(JSON.stringify({ message: 'El correo electrónico no es válido.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!allowedInterestedTypes.has(interestedType) || !allowedProjectTypes.has(projectType) || !allowedPropertyStatus.has(propertyStatus)) {
      return new Response(JSON.stringify({ message: 'Una de las opciones seleccionadas no es válida.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (privacyConsent !== 'yes') {
      return new Response(JSON.stringify({ message: 'Debes aceptar el aviso de privacidad.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const fileEntry = form.get('documents');
    let attachment: { filename: string; content: Buffer; contentType: string } | undefined;

    if (fileEntry instanceof File && fileEntry.size > 0) {
      if (fileEntry.size > MAX_FILE_SIZE) {
        return new Response(JSON.stringify({ message: 'El PDF no puede superar los 5 MB.' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const isPdf = fileEntry.type === 'application/pdf' || fileEntry.name.toLowerCase().endsWith('.pdf');
      if (!isPdf) {
        return new Response(JSON.stringify({ message: 'El documento debe ser un archivo PDF.' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      attachment = {
        filename: fileEntry.name.replace(/[^a-zA-Z0-9._-]/g, '_'),
        content: Buffer.from(await fileEntry.arrayBuffer()),
        contentType: 'application/pdf',
      };
    }

    const smtpPort = Number(import.meta.env.SMTP_PORT || 587);
    const smtpSecure = String(import.meta.env.SMTP_SECURE || 'false').toLowerCase() === 'true';
    const smtpUser = requiredEnv('SMTP_USER');
    const smtpPass = requiredEnv('SMTP_PASS');
    const smtpFrom = requiredEnv('SMTP_FROM');
    const contactTo = requiredEnv('CONTACT_TO');
    const smtpHost = requiredEnv('SMTP_HOST');

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const safeName = escapeHtml(name);
    const safeMunicipality = escapeHtml(municipality);
    const safeLocality = escapeHtml(locality);
    const safeProjectType = escapeHtml(projectType);

    await transporter.sendMail({
      from: smtpFrom,
      to: email,
      subject: 'Confirmación de registro de proyecto',
      text: `Hola ${name},\n\nHemos recibido correctamente la información de tu proyecto en ${municipality}, ${locality}.\n\nTipo de proyecto: ${projectType}\n\nNuestro equipo revisará la información y se pondrá en contacto contigo para dar seguimiento.\n\nGracias por tu interés.`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#222;max-width:620px;margin:auto">
          <h2>Registro recibido correctamente</h2>
          <p>Hola <strong>${safeName}</strong>,</p>
          <p>Hemos recibido la información de tu proyecto.</p>
          <p><strong>Ubicación:</strong> ${safeMunicipality}, ${safeLocality}<br>
          <strong>Tipo de proyecto:</strong> ${safeProjectType}</p>
          <p>Nuestro equipo revisará la información y se pondrá en contacto contigo para dar seguimiento.</p>
          <p>Gracias por tu interés.</p>
        </div>
      `,
    });

    await transporter.sendMail({
      from: smtpFrom,
      to: contactTo,
      replyTo: email,
      subject: `Nuevo interesado en proyecto: ${name}`,
      text: [
        'Nuevo registro de proyecto',
        '',
        `Nombre / razón social: ${name}`,
        `Correo: ${email}`,
        `Teléfono / WhatsApp: ${phone}`,
        `Municipio: ${municipality}`,
        `Localidad: ${locality}`,
        `Tipo de interesado: ${interestedType}`,
        `Tipo de proyecto: ${projectType}`,
        `Cuenta con predio: ${propertyStatus}`,
        `Ubicación aproximada: ${location || 'No proporcionada'}`,
      ].join('\n'),
      attachments: attachment ? [attachment] : [],
    });

    return new Response(JSON.stringify({ message: 'Registro enviado correctamente.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error en /api/project-interest:', error);

    return new Response(JSON.stringify({ message: 'No fue posible enviar el registro. Inténtalo nuevamente más tarde.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
