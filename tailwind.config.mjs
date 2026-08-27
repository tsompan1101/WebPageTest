/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#14171C',      // fondo del hero / secciones oscuras
          darker: '#0B0D10',    // footer
          orange: '#a50046',    // botones / acentos cálidos
          orangeDark: '#a50046',
          green: '#2E8B4E',     // etiquetas "eco" / estufas / vestimenta
          cream: '#f2f2f2',     // fondo de secciones claras
          ink: '#1B1B18',       // texto principal sobre fondo claro
          muted: '#6B6B65',     // texto secundario
        },
      },
      fontFamily: {
        display: ['"Sora"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '1rem',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
          addUtilities({
            /* Hide scrollbar for Chrome, Safari and Opera */
            '.no-scrollbar::-webkit-scrollbar': {
              'display': 'none',
            },
            /* Hide scrollbar for IE, Edge and Firefox */
            '.no-scrollbar': {
              '-ms-overflow-style': 'none',  /* IE and Edge */
              'scrollbar-width': 'none',  /* Firefox */
            },
          })
        },

  ],
};
