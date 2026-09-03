import type { ReactNode } from 'react';

/**
 * Interpreta marcado simple dentro de un string de content.ts y lo
 * convierte en JSX real (nada de dangerouslySetInnerHTML):
 *
 *   \n          -> salto de línea
 *   **texto**   -> texto en negrita
 *
 * Ejemplo en content.ts:
 *   description: 'Funciona con combustible.\nLas **gasolineras del pueblo** son...'
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
          {parseBold(line)}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

function parseBold(line: string): ReactNode[] {
  // Corta el string en pedazos, quedándose también con los que hacen
  // match (los **...**), gracias al grupo de captura en el regex.
  const parts = line.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}
