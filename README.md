# Estufas / Electrificación Tamaulipas — Sitio web

Proyecto hecho con **Astro + React + TypeScript + Tailwind CSS**. Todo el
texto, cifras, imágenes y videos del sitio se editan desde **un solo
archivo** (`src/data/content.ts`) — no hace falta tocar código para
cambiar contenido.

---

## 1. Instalación (solo la primera vez)

Necesitas **Node.js** instalado en la computadora. npm (el instalador de
paquetes) ya viene incluido con Node, no se instala aparte.

### 1.1 Revisa si ya tienes Node.js

Abre una terminal:
- **Windows:** busca "PowerShell" o "Símbolo del sistema" en el menú de inicio.
- **Mac:** busca "Terminal" en Spotlight.

Escribe:

```bash
node -v
```

- Si te muestra algo como `v22.x.x` o más nuevo → ya lo tienes, salta al
  punto 1.3.
- Si dice "no se reconoce el comando" / "command not found" → no está
  instalado, sigue al punto 1.2.

Este proyecto necesita **Node.js 22.12 o superior** (está definido en
`package.json`, campo `engines`).

### 1.2 Instalar Node.js

1. Ve a **https://nodejs.org**.
2. Descarga la versión **LTS** (la recomendada, botón grande de la
   izquierda). Si necesitas específicamente la 22 o más nueva y el LTS
   ofrecido es más viejo, entra a la sección "Other Downloads" y elige la
   22.x o superior.
3. Ejecuta el instalador descargado y dale "Siguiente" a todo (las
   opciones por defecto sirven).
4. **Cierra y vuelve a abrir** la terminal (importante, si no, no
   reconocerá el comando).
5. Verifica de nuevo con `node -v` y `npm -v` — ambos deben responder con
   un número de versión.

### 1.3 Descargar/ubicar el proyecto

Descomprime la carpeta del proyecto donde prefieras trabajar (por ejemplo
`Documentos\estufas`). **Evita** guardar dentro de esa carpeta archivos
`.rar`/`.zip` de respaldo — el servidor de desarrollo vigila todos los
archivos de la carpeta y los comprimidos bloqueados por Windows pueden
causar errores (`EBUSY`). Guarda esos respaldos en otro lugar.

### 1.4 Instalar las dependencias del proyecto

Con la terminal, entra a la carpeta del proyecto:

```bash
cd ruta\a\la\carpeta\estufas
```

Y instala todo lo que el proyecto necesita (Astro, React, Tailwind, etc.):

```bash
npm install
```

Esto crea una carpeta `node_modules` (pesada, normal) con todas las
piezas necesarias. Solo se hace una vez, o cada vez que cambie
`package.json`.

---

## 2. Correr el proyecto (cada vez que quieras trabajar en él)

Desde la carpeta del proyecto:

```bash
npm run dev
```

Vas a ver algo como:

```
Local   http://localhost:4321/
```

Abre esa dirección en tu navegador (Chrome, Edge, etc.). Mientras esta
terminal siga corriendo, cualquier cambio que guardes en el código se
refleja solo en el navegador (no hace falta recargar a mano).

Para detenerlo: click en la terminal y `Ctrl + C`.

### Otros comandos útiles

| Comando           | Qué hace                                                         |
|-------------------|-------------------------------------------------------------------|
| `npm run dev`     | Servidor de desarrollo local (el que usas mientras editas)        |
| `npm run build`   | Genera la versión final optimizada, lista para publicar (carpeta `dist/`) |
| `npm run preview` | Sirve localmente lo que generó `npm run build`, para revisar antes de publicar |

---

## 3. Estructura del proyecto (resumen)

```
src/
  components/     # Piezas de React de cada sección (Hero, Stats, etc.)
  data/
    content.ts    # <-- AQUÍ SE EDITA TODO EL CONTENIDO DEL SITIO
  layouts/
    Layout.astro  # Cabecera HTML común (fuentes, meta tags)
  pages/
    index.astro       # Página de inicio
    conocenos.astro   # Página "Conócenos"
    testimonios.astro # Página "Testimonios"
  styles/
    global.css    # Colores de marca, botones, efecto de brillo Pantone
public/
  images/         # Todas las fotos/íconos del sitio
  videos/         # Videos de testimonios
astro.config.mjs  # Configuración de Astro (no se toca para editar contenido)
```

Para agregar una imagen o video nuevo: cópialo dentro de `public/images/`
o `public/videos/`, y luego escribe su ruta en `content.ts` empezando con
`/images/...` o `/videos/...` (sin la palabra `public`).

---

## 4. Guía completa de `src/data/content.ts`

Este archivo es un conjunto de listas y objetos. Cada uno controla una
sección específica del sitio. Puedes editar textos, números y rutas de
imagen libremente — solo respeta las comillas `'...'` y las comas entre
elementos.

### `siteNav` — Menú de navegación (aparece en todas las páginas)

```ts
export const siteNav = {
  links: [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '/conocenos' },
    ...
  ],
  cta: { label: 'Proyectos', href: '/' },
};
```

- `links`: cada objeto es un botón del menú. `label` es el texto que se
  ve, `href` es a dónde lleva.
  - `href: '#'` significa "página que todavía no existe" — el link se
    ve pero no resalta como activo ni lleva a ningún lado real.
  - Cuando crees una página nueva (ej. `src/pages/normatividad.astro`),
    cambia su `href` de `'#'` a `/normatividad` para que quede conectada
    y el menú la resalte automáticamente al visitarla.
- `cta`: el botón destacado (relleno) al final del menú. Si su `href`
  coincide con el de algún link de arriba, **desaparece solo** (para no
  repetir el mismo destino dos veces). Dale una ruta distinta (ej.
  `/donar`) para que vuelva a aparecer con su propio texto.

### `hero` — Sección principal de portada (`index.astro`)

```ts
export const hero = {
  eyebrow: '',
  title: 'Transformando el rezago energético...',
  primaryCta: { label: 'Conoce más', href: '#logros' },
  backgroundImage: '/images/hero-bg.jpeg',
};
```

- `eyebrow`: texto pequeño arriba del título (puede dejarse vacío `''`).
- `title`: el titular grande.
- `primaryCta`: el botón debajo del título.
- `backgroundImage`: foto de fondo de toda la portada.

### `stats` — Números destacados ("Lo que hemos logrado")

```ts
export const stats = [
  { value: 40, suffix: '', label: 'paneles instalados', icon: 'communities' },
  ...
];
```

- `value`: el número (se anima contando desde 0 al llegar a la vista).
- `suffix`: texto pegado después del número (ej. `'+'` para "40+").
- `label`: descripción debajo del número.
- `icon`: no cambia nada visualmente todavía, es solo una etiqueta interna.

### `contentBlocks` — Bloques de texto + imagen lado a lado

Usado para "Electrificación al 100%" y "Estufas Eficientes de Leña" en la
portada (el bloque simple, no la sección con barras de progreso).

```ts
{
  id: 'electrificacion',
  title: 'Electrificación al 100%',
  body: 'Llevamos electricidad limpia...',
  cta: { label: 'Conocer el proyecto', href: '#' },
  image: '/images/electrificacion.jpeg',
  imageSide: 'right' as const,   // o 'left'
}
```

- `imageSide` controla de qué lado va la foto (`'right'` o `'left'`) —
  déjalo tal cual, solo cambia el valor entre comillas si quieres
  invertir el orden.
- Agrega o quita objetos de esta lista para agregar/quitar bloques.

### `sdg` — Slider de Objetivos de Desarrollo Sostenible

```ts
export const sdg = {
  slides: [
    {
      image: '/images/ods-1.jpg',
      title: '7 Objetivos de Desarrollo Sostenible impactados',
      body: 'Nuestras acciones contribuyen...',
      goals: [1, 3, 7, 10, 11, 13, 17],
    },
    ...
  ],
};
```

- Cada objeto dentro de `slides` es una diapositiva completa: su propia
  imagen, título, texto y lista de números de ODS (los círculos verdes).
  Cambian todos juntos al navegar el slider (con flechas, manual, sin
  autoplay).
- Para un salto de línea dentro de `body`, se usa `\n` (ya está usado en
  los textos actuales).
- Agrega o quita objetos de `slides` para agregar/quitar diapositivas.

### `causes` — Grid "Súmate a la Causa"

```ts
{
  title: 'Electrificación al 100%',
  description: 'Meta Temporal 2026: Entregar e instalar...',
  image: '/images/causa-electrificacion.jpeg',
  href: '#',
}
```

Cada objeto es una tarjeta clickeable. `href` es a dónde lleva la
tarjeta completa.

### `logos` — Barra de "Aliados"

```ts
export const logos = [
  { name: 'Aliado 1', src: '/images/logos/logo-1.svg' },
  ...
];
```

`name` es solo para accesibilidad (lectores de pantalla), no se muestra
como texto. `src` es la ruta del logo. Agrega/quita objetos para
agregar/quitar aliados.

### `footer` — Pie de página (aparece en todas las páginas)

```ts
export const footer = {
  description: 'Transformando el rezago energético...',
  quickLinks: [ { label: 'Resultados', href: '#' }, ... ],
  redirectIcon: '/images/logos/redirect.svg',
  contact: {
    email: 'info@tamaulipas.gob.mx',
    emailIcon: '/images/logos/mail.svg',
    phone: '+52 (834) 123 5678',
    phoneIcon: '/images/logos/phone.svg',
  },
  social: [ { label: 'Facebook', href: '#' }, ... ],
};
```

- `description`: texto corto junto al logo.
- `quickLinks`: lista de links de la columna "Links Rápidos". `redirectIcon`
  es el icono que se repite junto a cada uno de esos links.
- `contact.email` / `contact.phone`: se muestran como link `mailto:`/`tel:`
  automáticamente (al tocarlos en celular abren el correo o el marcador).
- `social`: lista de redes sociales (solo texto por ahora; si quieres
  íconos de nuevo aquí, dímelo).

### `equipo` — Tarjetas de personas en "Conócenos"

```ts
{
  title: 'Persona',        // nombre de la persona
  description: 'Descripcion Persona.',
  image: '/images/persona1.jpg',
}
```

Al pasar el mouse (o dar tap/foco en celular) sobre la tarjeta, `title` y
`description` se muestran deslizándose desde abajo. Agrega/quita objetos
para agregar/quitar integrantes del equipo.

### `testimonialsPage` — Encabezado de la página de Testimonios

```ts
export const testimonialsPage = {
  eyebrow: 'Escucha cómo tu donativo transforma vidas',
  title: 'Testimonios del Bienestar',
  intro: 'Cada donativo se transforma en una oportunidad...',
};
```

Solo el texto de arriba de esa página (no confundir con `testimonials`
ni `videoTestimonials`, son cosas distintas — ver abajo).

### `videoTestimonials` — Galería de VIDEO (arriba, en Testimonios)

```ts
{
  id: 'video_electrificacion1',
  name: 'Testimonio',
  video: '/videos/testimonio_electrificacion1.mp4',
  thumbnail: '/images/thumbnail_electrificacion1.png',
}
```

- `id` debe ser único entre todos los elementos de esta lista.
- `name` se usa para el texto de accesibilidad ("Ver testimonio de...").
- `video`: la ruta del archivo `.mp4` (debe estar en `public/videos/`).
- `thumbnail`: la imagen que se ve antes de darle play.
- Puedes agregar tantos como quieras — la galería se pagina sola: 4 a la
  vez en pantallas grandes, 2 en tablet, 1 en celular, con flechas para
  recorrer el resto.

### `testimonials` — Slider automático de imagen + cita (abajo, en Testimonios)

```ts
{
  id: 'testimonio 1',
  name: 'Aurelia Padilla Zuñiga.',
  role: 'Beneficiaria del programa de Estufas Eficientes de Leña',
  quote: 'Ahora si podre cuidarme de los pulmones...',
  slideImage: '/images/testimonio_estufa1.png',
}
```

Este es el slider de **abajo** de la página de Testimonios (foto + cita
sobrepuesta, cambia solo cada 5 segundos). `name` y `role` se muestran
como firma de la cita. Nota: dos de los cuatro testimonios actuales
tienen `name: ''` o `'.'` — les falta el nombre real.

### `ElectrificacionImpact` / `EstufasImpact` — Secciones con barras de progreso

Usadas en la portada, después de "Súmate a la Causa" (la sección con
imagen de fondo grande, tarjeta blanca y barras de avance).

```ts
export const ElectrificacionImpact = [
  {
    id: 'electrificacion-impacto',
    title: 'Electrificación al 100%',
    eyebrow: '¿Cómo vamos?',
    description: 'Hasta la fecha se han instalado paneles solares...',
    statLabel: '82 Personas Beneficiadas',
    progressBars: [
      { label: '39 paneles recaudados de 1,000', current: 39, total: 1000 },
      { label: '2 municipios beneficiados de nuestro objetivo 42', current: 2, total: 42 },
    ],
    question: '¿Cómo este proyecto a transformado las condiciones de vida de los tamaulipecos?',
    linkLabel: 'Testimonios del Bienestar',
    linkHref: '/testimonios',
    secondaryCta: { label: '¿A dónde va el dinero?', href: '#' },
    primaryCta: { label: '¡Súmate y Dona Aquí!', href: '#' },
    backgroundImage: '/images/impacto-electrificacion.jpg',
  },
];
```

- `progressBars`: cada barra calcula su propio porcentaje con
  `current / total` — no hace falta calcular el % a mano, solo pon los
  dos números reales (ej. si van 39 de una meta de 1,000, escribe
  `current: 39, total: 1000`).
- `statLabel`: la cifra grande junto al ícono (personas beneficiadas).
- `question` + `linkLabel` + `linkHref`: la pregunta al final con el link
  destacado (hoy apunta a `/testimonios`).
- `secondaryCta` / `primaryCta`: los dos botones sobre la imagen.
- `EstufasImpact` tiene exactamente la misma forma, para la sección de
  Estufas — es una lista aparte porque en teoría podrías poner más de una
  sección de cada tipo (por eso ambas son arreglos `[ ]`, aunque hoy
  tengan un solo elemento cada una).

  ⚠️ **Pendiente de revisar:** ahora mismo `EstufasImpact` tiene el mismo
  `id` (`'electrificacion-impacto'`) y el mismo `title` ("Electrificación
  al 100%") que `ElectrificacionImpact` — parece que se copió como base y
  falta actualizar el texto para que hable de estufas.

---

## 5. Solución de problemas comunes

- **Error `EBUSY: resource busy or locked` al correr `npm run dev`:**
  casi siempre es un archivo `.rar`/`.zip` guardado dentro de la carpeta
  del proyecto. Sácalo de ahí (ver punto 1.3).
- **Cambié algo en `content.ts` y no se ve reflejado:** revisa que no
  haya quedado una coma o comilla sin cerrar — la terminal donde corre
  `npm run dev` muestra el error exacto y la línea.
- **Una imagen no aparece (recuadro roto):** revisa que el archivo exista
  exactamente en la ruta que escribiste dentro de `public/` (mayúsculas y
  extensión `.jpg`/`.jpeg`/`.png` deben coincidir exactamente).
