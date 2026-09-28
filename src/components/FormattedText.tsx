import type { ReactNode } from 'react';

/**
 * Interpreta marcado simple dentro de un string de content.ts y lo
 * convierte en JSX real (nada de dangerouslySetInnerHTML):
 *
 *   \n          -> salto de línea
 *   **texto**   -> negrita
 *   *texto*     -> itálica
 *   __texto__   -> subrayado
 *   ~~texto~~   -> letra chica (small)
 *   ^texto^     -> subíndice
 *   ^^texto^^   -> superíndice
 *
 * Ejemplo en content.ts:
 *   description: 'Funciona con combustible.\nLas **gasolineras del pueblo** son *muy* buenas.\n__Importante__: revisa el ~~texto legal~~ y el precio^2^.'
 *
 * Uso en cualquier componente:
 *   <p><FormattedText text={data.description} /></p>
 */
export default function FormattedText({ text }: { text: string }) {
  const lines = text.split('\n');

  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {parseInline(line)}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

// Orden importante: los patrones más "específicos" o largos van primero,
// para que **negrita** no sea capturado por error como *itálica*, y
// ^^superíndice^^ no sea capturado como ^subíndice^.
const TOKEN_REGEX =
  /(\*\*[^*]+\*\*|__[^_]+__|~~[^~]+~~|\^\^[^^]+\^\^|\*[^*]+\*|\^[^^]+\^)/g;

function parseInline(line: string): ReactNode[] {
  const parts = line.split(TOKEN_REGEX);

  return parts.map((part, i) => {
    if (!part) return null;

    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('__') && part.endsWith('__')) {
      return <u key={i}>{part.slice(2, -2)}</u>;
    }
    if (part.startsWith('~~') && part.endsWith('~~')) {
      return <small key={i}>{part.slice(2, -2)}</small>;
    }
    if (part.startsWith('^^') && part.endsWith('^^')) {
      return <sup key={i}>{part.slice(2, -2)}</sup>;
    }
    if (part.startsWith('^') && part.endsWith('^')) {
      return <sub key={i}>{part.slice(1, -1)}</sub>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }

    return part;
  });
}
