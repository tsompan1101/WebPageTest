// ---------------------------------------------------------------------------
// Contenido editable del sitio. Cambia aquí los textos, cifras e imágenes
// para personalizar la web sin tocar el código de los componentes.
// ---------------------------------------------------------------------------
type NavLink = { label: string; href: string; children?: { label: string; href: string }[] };
export const siteNav = {
  logo: '/images/logos/logo.svg',
  logo1: '/images/logos/TAM Y SEDENER LOGO OFICIAL.png',
  links: [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '/conocenos' },
    {
      label: 'Programas',
      href: '#',
      children: [
        { label: 'Electrificación al 100%', href: '/electrificacion' },
        { label: 'Estufas Eficientes de Leña', href: '/estufas' },
        { label: 'Gasolineras del pueblo', href: '/gasolineras' },
      ],
    },
  ] satisfies NavLink[],
  cta: { label: 'Programas', href: '/' },
};

export const hero = {
  eyebrow: '',
  title:
    'Justicia social y soberanía energética para Tamaulipas.',
  primaryCta: { label: 'Conoce más', href: '#programas' },
  secondaryCta: { label:'¡Súmate!', href: '/donaciones' },
  backgroundImage: '/images/hero-bg.jpeg',
};

export const contentBlocks = [
  {
    id: 'electrificacion',
    title: '¡Electrificando Tamaulipas!',
    body:
      'Como un acto fundamental de justicia social para reducir la brecha de desigualdad en el estado, impulsamos el programa de Electrificación al 100%. Llevamos energía a donde antes no la había, garantizando a las familias vulnerables el acceso a sistemas fotovoltaicos autónomos y eficientes que transforman la calidad de vida y protegen la salud en sus hogares.',
    primaryCta: { label: 'Conocer el proyecto', href: '/electrificacion' },
    secondaryCta: { label: '', href: '/donaciones' },
    image: '/images/electrificacion.jpeg',
    imageSide: 'right' as const,
  },
  {
    id: 'estufas',
    title: 'Estufas Eficientes y dignas para el servicio del pueblo ',
    body:
      'Destinadas a reducir la demanda de leña y mitigar las emisiones contaminantes al interior de la vivienda. Esta estrategia integral busca garantizar el derecho a la salud de las comunidades, disminuir la pobreza energética y promover un desarrollo sustentable con bienestar social.',
    primaryCta: { label: 'Conocer el proyecto', href: '/estufas' },
    secondaryCta: { label: '', href: '' },
    image: '/images/estufas.jpeg',
    imageSide: 'left' as const,
  },
  {
    id: 'gasolineras',
    title: '¡Abasteciendo a Tamaulipas con justicia social!',
    body:
      'Gracias al modelo de franquicia e innovación energética con respaldo institucional que transforma la distribución de combustibles en el estado. En Gasolineras del Pueblo llevamos energía de calidad, trazable y a precios justos a las regiones productivas y comunidades que más lo necesitan, garantizando una operación eficiente y transparente. Invitamos a inversionistas, aliados comerciales y municipios a formar parte de una red socialmente responsable que fortalece la economía de las familias y abandera el cambio energético en Tamaulipas.',
    primaryCta: { label: 'Conocer las Gasolineras', href: '/gasolineras' },
    secondaryCta: { label: 'Conocer ubicación de las Gasolineras', href: 'https://sieet.tamaulipas.gob.mx/mapa' },
    image: '/images/gaso1.jpeg',
    imageSide: 'right' as const,
  },
];

export const sdg = {

  slides: [
    {
      image: '/images/ods/slide1.jpg',
      title: '7 Objetivos de Desarrollo Sostenible impactados',
      body:
        'Nuestras acciones contribuyen directamente al cumplimiento de Siete ODS de la agenda 2030, generando beneficios sociales, ambientales y energéticos para las comunidades de Tamaulipas.\n Con tu apoyo, hacemos posible que más familias accedan a energía limpia y tecnologías eficientes que mejoren su calidad de vida.',
      goals: [3, 5, 7, 11, 12, 13, 15],
      icon: '/images/ods/ods.png',
    },
    {
      image: '/images/ods/slide2.jpg',
      title: ' Salud y bienestar en cada comunidad',
      body:
        'Disminuye drásticamente la exposición al humo intra-domiciliario y partículas finas dentro de los hogares, previniendo enfermedades respiratorias crónicas que afectan principalmente a mujeres, niños y adultos mayores.',
      goals: [],
      icon: '/images/ods/3.jpg',
    },
    {
      image: '/images/ods/slide3.jpg',
      title: ' Igualdad de Genero',
      body:
        ' Reduce las horas que históricamente las mujeres y niñas han dedicado diariamente a la recolección de leña y a las tareas de cocina, liberando tiempo valioso que puede ser destinado a la educación, actividades productivas o el descanso.',
      goals: [ ],
      icon: '/images/ods/5.jpg',
    },
    {
      image: '/images/ods/slide4.jpg',
      title: ' Energía Asequible y No Contaminante',
      body:
        'Proporciona una alternativa tecnológica más eficiente y limpia para la cocción de alimentos en zonas vulnerables o sin acceso a gas, optimizando el aprovechamiento del recurso energético térmico a través de la eficiencia energética.',
      goals: [ ],
      icon: '/images/ods/7.jpg',
    },
    {
      image: '/images/ods/slide5.jpg',
      title: ' Ciudades y Comunidades Sostenibles',
      body:
        'Mejora la calidad del aire local e impulsa condiciones de vivienda más seguras y habitables en comunidades rurales y periurbanas.',
      goals: [ ],
      icon: '/images/ods/11.jpg',
    },
    {
      image: '/images/ods/slide6.jpg',
      title: ' Producción y Consumo Responsables',
      body:
        'Promueve un uso más eficiente de la biomasa al ahorrar entre un 70%-80% menos de leña por hogar, fomentando hábitos de consumo térmico sostenibles.',
      goals: [ ],
      icon: '/images/ods/12.jpg',
    },
    {
      image: '/images/ods/slide7.jpg',
      title: ' Acción por el Clima',
      body:
        'Reduce la emisión de gases de efecto invernadero (como CO2) y hollín, contribuyendo directamente a la mitigación del cambio climático.',
      goals: [ ],
      icon: '/images/ods/13.jpg',
    },
    {
      image: '/images/ods/slide8.png',
      title: ' Vida de Ecosistemas Terrestres',
      body:
        'Al disminuir sustancialmente la demanda de madera para leña, se frena la presión sobre los bosques y selvas locales, mitigando la deforestación y la degradación del suelo.',
      goals: [ ],
      icon: '/images/ods/15.jpg',
    },
  ],
};

export const causes = [
  {
    title: 'Electrificación al 100%',
    description: 'Meta Temporal 2026: Entregar e instalar 1,000 sistemas fotovoltaicos aislados en viviendas sin red eléctrica.',
    image: '/images/causa-electrificacion.jpeg',
    href: '/donaciones-paneles',
  },
  {
    title: 'Estufas de Leña Eficientes',
    description: 'Meta Temporal 2026: Entregar e instalar 1,000 estufas eficientesde leña que sustituyan fogones abiertos.',
    image: '/images/causa-estufas.jpeg',
    href: '/donaciones-estufas',
  }
];

export const logos = [
  { name: 'Aliado 1', src: '/images/logos/logo-1.svg' },
  { name: 'Aliado 2', src: '/images/logos/logo-2.svg' },
  { name: 'Aliado 3', src: '/images/logos/logo-3.svg' },
  { name: 'Aliado 4', src: '/images/logos/logo-4.svg' },
  { name: 'Aliado 5', src: '/images/logos/logo-5.svg' },
  { name: 'Aliado 6', src: '/images/logos/logo-6.svg' },
  { name: 'Aliado 7', src: '/images/logos/logo-7.svg' },
  { name: 'Aliado 8', src: '/images/logos/logo-8.svg' },
  { name: 'Aliado 9', src: '/images/logos/logo-9.svg' },
  { name: 'Aliado 10', src: '/images/logos/logo-10.svg' },
  { name: 'Aliado 11', src: '/images/logos/logo-11.svg' },
  { name: 'Aliado 12', src: '/images/logos/logo-12.svg' },
  { name: 'Aliado 13', src: '/images/logos/logo-13.svg' },
  { name: 'Aliado 14', src: '/images/logos/logo-14.svg' },
  { name: 'Aliado 15', src: '/images/logos/logo-15.svg' },
  { name: 'Aliado 16', src: '/images/logos/logo-16.svg' },
  { name: 'Aliado 17', src: '/images/logos/logo-17.svg' },
  { name: 'Aliado 18', src: '/images/logos/logo-18.svg' },
  { name: 'Aliado 19', src: '/images/logos/logo-19.svg' },
  { name: 'Aliado 20', src: '/images/logos/logo-20.svg' },
  { name: 'Aliado 21', src: '/images/logos/logo-21.svg' },
  { name: 'Aliado 22', src: '/images/logos/logo-22.svg' },
  { name: 'Aliado 23', src: '/images/logos/logo-23.svg' },
  { name: 'Aliado 24', src: '/images/logos/logo-24.svg' },
  { name: 'Aliado 25', src: '/images/logos/logo-25.svg' },
  { name: 'Aliado 26', src: '/images/logos/logo-26.svg' },
  { name: 'Aliado 27', src: '/images/logos/logo-27.svg' },
  { name: 'Aliado 28', src: '/images/logos/logo-28.svg' },
  { name: 'Aliado 29', src: '/images/logos/logo-29.svg' },
  { name: 'Aliado 30', src: '/images/logos/logo-30.svg' },
  { name: 'Aliado 31', src: '/images/logos/logo-31.svg' },
  { name: 'Aliado 32', src: '/images/logos/logo-32.svg' },
  { name: 'Aliado 33', src: '/images/logos/logo-33.svg' },
  { name: 'Aliado 34', src: '/images/logos/proveedor.svg' },
];

export const footer = {
  logo:'/images/logos/logo.svg',
  description:
    'Transformando el rezago energético en justicia social a través de tecnologías limpias y eficientes.',
  quickLinks: [
    { label: 'Donaciones', href: '/donaciones' },
    { label: 'Testimonios', href: '/testimonios' },
    { label: 'Conócenos', href: '/conocenos' },
    { label: 'Inicio', href: '/' },
    { label: 'Causa Social', href: '/pronto' },
  ],
  redirectIcon: '/images/logos/redirect.svg',
  contact: {
    email: 'info@tamaulipas.gob.mx',
    emailIcon: '/images/logos/mail.svg',
    phone: '+52 (834) 318 8000 Ext. 58175',

    phoneIcon:'/images/logos/phone.svg',
  },
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61557031195349' },
    { label: 'Instagram', href: 'https://www.instagram.com/comision.energia.tam/' },
    { label: 'X(Twitter)', href: 'https://x.com/SedenerTam' },
  ],
};

export const equipo = [
  {
    title: 'Luis Esteban Igartua Calderon',
    description: '',
    image: '/images/persona1.jpg',
  },
  {
    title: 'Fernando Isai Urbina Rangel',
    description: '',
    image: '/images/persona2.jpg',
  },
  {
    title: 'Eduardo Gutiérrez Sicardo',
    description: '',
    image: '/images/persona3.jpg',
  },
  {
    title: 'Juan Antonio Rocha Morelos',
    description: 'Lic. en Comercio Internacional',
    image: '/images/persona4.jpg',
  },
];

export const testimonialsPage = {
  eyebrow: 'Conoce cómo tu aportación se convierte en justicia social',
  title: 'Testimonios desde el Territorio',
  intro:
    'Al apoyar el acceso a tecnologías eficientes y limpias, impulsamos el bienestar de quienes más lo necesitan, eliminando la contaminación dentro de la vivienda y protegiendo la salud de cada familia.',
};

export const videoTestimonials = [
  {
    id: 'video_electrificacion1',
    name: 'Testimonio',
    video: '/videos/testimonio_electrificacion1.mp4',
    thumbnail: '/images/thumbnail_electrificacion1.png',
  },
  {
    id: 'video_estufas1',
    name: 'Testimonio',
    video: '/videos/testimonio_estufa1.mp4',
    thumbnail: '/images/thumbnail_estufas1.png',
  },
  {
    id: 'video_electrificacion2',
    name: 'Testimonio',
    video: '/videos/testimonio_electrificacion2.mp4',
    thumbnail: '/images/thumbnail_electrificacion2.png',
  },
  {
    id: 'video_estufas2',
    name: 'Testimonio',
    video: '/videos/testimonio_estufa2.mp4',
    thumbnail: '/images/thumbnail_estufas2.png',
  },
]

export const testimonials = [
  {
    id: 'testimonio 1',
    name: 'Aurelia Padilla Zuñiga.',
    role: 'Beneficiaria del programa de Estufas Eficientes de Leña',
    quote: 'Ahora si podre cuidarme de los pulmones, pues alla estaba en la interperia y me daba todo.',
    slideImage: '/images/testimonio_estufa1.png',
  },
  {
    id: 'testimonio 2',
    name: '.',
    role: 'Beneficiaria del programa de Electrificación',
    quote: 'Cambia bastante porque pues ya puedes tener un abanico, puedes tener, por decir, una televisión.',
    slideImage: '/images/testimonio_electrificacion1.png',
  },
  {
    id: 'testimonio 3',
    name: '',
    role: 'Beneficiario del programa de Estufas Eficientes de Leña',
    quote: 'Yo estaba en un fogoncito donde me daba todo lo caliente... esta me saca de muchisimos apuros.',
    slideImage: '/images/testimonio_estufa2.png',
  },
  {
    id: 'testimonio 4',
    name: 'San Juana Garza López',
    role: 'Beneficiaria del programa de Estufas Eficientes de Leña',
    quote: 'Muchisimas gracias y muy agradecida y pus que Dios los ayude.',
    slideImage: '/images/testimonio_electrificacion2.png',
  },
];

export const ElectrificacionImpact = [
  {
    id: 'electrificacion-impacto',
    title: 'Electrificación al 100%',
    eyebrow: '¿Cómo vamos?',
    description:
      'Cada sistema instalado representa un paso firme hacia la justicia social y la transformación energética de Tamaulipas. \n\nA la fecha, hemos llevado luz y dignidad a los municipios de **Casas** y **Gustavo Díaz Ordaz**, transformando la salud, el bienestar y la calidad de vida de familias que hoy cuentan con energía limpia, autónoma y eficiente en sus hogares.',
    statLabel: '82 Personas Beneficiadas',
    // "current" y "total" definen el % de cada barra (current / total).
    progressBars: [
      { label: '40 paneles recaudados de 1,000', current: 40, total: 1000 },
      { label: '2 municipios beneficiados de nuestro objetivo 43', current: 2, total: 43 },
    ],
    question: '¿Cómo este proyecto a transformado las condiciones de vida de los tamaulipecos?',
    linkLabel: 'Testimonios de Familias',
    linkHref: '/testimonios',
    secondaryCta: { label: '¿Cómo funciona?', href: '#solutions' },
    primaryCta: { label: '¡Súmate!', href: '/donaciones-paneles' },
    backgroundImage: '/images/impacto-electrificacion.jpg',
  },
];

export const EstufasImpact = [
  {
    id: 'estufas-impacto',
    title: 'Estufas Eficientes',
    eyebrow: '¿Cómo vamos?',
    description:
      'Con el programa de Estufas Eficientes buscamos brindar dignidad los hogares de nuestras comunidades y combatir la pobreza energética. \n\nA la fecha, hemos sustituido fogones tradicionales en los municipios de **Casas**, **Gustavo Díaz Ordaz**, **Miquihuana**, **Abasolo**, **Jiménez**, **González**, **Soto la Marina** y **Victoria**, eliminando el humo en el interior de las viviendas para proteger la salud pulmonar de **más** de **400 personas** y logrando un uso mucho más eficiente de la energía térmica.',
    statLabel: '400+ Personas Beneficiadas',
    // "current" y "total" definen el % de cada barra (current / total).
    progressBars: [
      { label: '66 estufas recaudados de 1,000', current: 66, total: 1000 },
      { label: '8 municipios beneficiados de nuestro objetivo 43', current: 8, total: 43 },
    ],
    question: '¿Cómo este proyecto a transformado las condiciones de vida de los tamaulipecos?',
    linkLabel: 'Testimonios de Familias',
    linkHref: '/testimonios',
    secondaryCta: { label: '¿A dónde va el dinero?', href: '#proveedores' },
    primaryCta: { label: '¡Súmate!', href: '/donaciones-estufas' },
    backgroundImage: '/images/impacto-estufas.jpg',
  },
];

export const GasolinerasImpact = [
  {
    id: 'gasolineras-impacto',
    title: 'Gasolineras del pueblo',
    eyebrow: '¿Cómo vamos?',
    description:
      'Bajo el liderazgo de la Secretaría de Desarrollo Energético, nace la franquicia Gasolineras del Pueblo, una red de estaciones diseñada para transformar el mercado a través de la honestidad y el valor agregado.\n \nAl unirte a nuestra red, tu empresa ofrecerá a los tamaulipecos precios más competitivos, una cobertura de calidad superior, trazabilidad garantizada del combustible y la certeza inquebrantable de recibir "litros de a litro".\n \n Nuestro crecimiento ya es una realidad. Este 2026, el Gobierno de Tamaulipas pondrá en marcha las primeras tres estaciones de la red (una adquirida y dos de nueva creación), comenzando con la histórica apertura de nuestra sucursal insignia en La Pesca, Soto La Marina.',
    statLabel: '400+ Personas Beneficiadas',
    // "current" y "total" definen el % de cada barra (current / total).
    progressBars: [
      { label: '1 gasolinera inagurada', current: 1, total: 1 },
      { label: '1 municipio beneficiado', current: 1, total: 1 },
    ],
    question: '¿Cómo este proyecto a transformado las condiciones de vida de los tamaulipecos?',
    linkLabel: 'Testimonios de Familias',
    linkHref: '/testimonios',
    secondaryCta: { label: '¡Participa!', href: '/formulario' },
    primaryCta: { label: 'Ubicar Gasolinera', href: 'https://sieet.tamaulipas.gob.mx/mapa' },
    backgroundImage: '/images/impacto-gasolineras.jpeg',
  },
];

export const electrificacionSolutions = [
  {
    title: 'Sistema fotovoltaico aislado',
    category: 'Generación solar',
    description:
      'Solución de generación diseñada para llevar electricidad autónoma y de alta eficiencia a viviendas en comunidades vulnerables sin conexión a la red eléctrica.',
    benefits: [
      'Aprovecha la radiación solar disponible en la comunidad.',
      'Permite electrificar viviendas alejadas de la red.',
      'Requiere mantenimiento periódico y sencillo.',
    ],
    image: '/images/impacto-electrificacion.jpg',
    alt: 'Instalación de electrificación mediante energía solar',
  },
  {
    title: 'Almacenamiento de energía',
    category: 'Continuidad',
    description:
      'Las baterías permiten conservar la energía generada durante el día para utilizarla cuando no hay radiación solar.',
    benefits: [
      'Disponibilidad de energía durante la noche.',
      'Mejor aprovechamiento de la generación solar.',
      'Ayuda a dar un suministro estable para cargas esenciales.',
    ],
    image: '/images/electrificacion.jpeg',
    alt: 'Sistema de electrificación solar para una vivienda',
  },
  {
    title: 'Instalación y seguridad',
    category: 'Implementación',
    description:
      'Se hace un implementación técnica normada y profesional que garantiza el funcionamiento seguro, confiable y duradero de cada componente del sistema.',
    benefits: [
      'Dimensionamiento de acuerdo con las necesidades de la vivienda.',
      'Protecciones eléctricas y cableado adecuados.',
      'Instalación pensada para facilitar el mantenimiento.',
    ],
    image: '/images/causa-electrificacion.jpeg',
    alt: 'Programa de electrificación para comunidades',
  },
];

export const estufasSolutions = [
  {
    title: 'Combustión más eficiente',
    category: 'Eficiencia',
    description:
      'El diseño de una estufa eficiente busca aprovechar mejor el calor de la leña para cocinar con menor consumo de combustible.',
    benefits: [
      'Reduce la cantidad de leña necesaria para cocinar.',
      'Aprovecha mejor el calor generado.',
      'Puede disminuir el tiempo dedicado a conseguir combustible.',
    ],
    image: '/images/impacto-estufas.jpg',
    alt: 'Estufa eficiente de leña del programa',
  },
  {
    title: 'Salida de humo al exterior',
    category: 'Salud',
    description:
      'La conducción del humo hacia el exterior ayuda a reducir la exposición de las familias a contaminantes generados durante la combustión.',
    benefits: [
      'Menor acumulación de humo dentro de la vivienda.',
      'Mejora las condiciones del espacio de cocina.',
      'Beneficia especialmente a quienes pasan más tiempo en casa.',
    ],
    image: '/images/estufas.jpeg',
    alt: 'Estufa eficiente instalada en una vivienda',
  },
  {
    title: 'Construcción y uso adecuados',
    category: 'Seguridad',
    description:
      'Una instalación correcta y el uso adecuado de la estufa son parte esencial del beneficio del programa.',
    benefits: [
      'Superficie y estructura diseñadas para cocinar de forma práctica.',
      'Instalación considerando ventilación y salida de humo.',
      'Capacitación para aprovechar correctamente la tecnología.',
    ],
    image: '/images/causa-estufas.jpeg',
    alt: 'Programa de estufas eficientes de leña',
  },
];

export const gasolinerasSolutions = [
  {
    title: '¡Quiero desarrollar una nueva estación!',
    category: 'Documentación',
    description:
      'Inicia tu proyecto con el respaldo institucional del Estado para expandir la red de abasto eficiente, seguro y de precio justo en las regiones productivas de Tamaulipas.',
    benefits: [
      'Registro preliminar ágil: Proceso sencillo para capturar los datos esenciales del inversionista o desarrollador, empresa, ubicación municipal y estatus del predio.',
      'Prevalidación documental integral: Acompañamiento técnico y legal en la revisión de propiedad del terreno, georreferenciación, uso de suelo preliminar, RFC y personalidad jurídica.',
    ],
    image: '/images/gaso3.jpeg',
    alt: 'Estufa eficiente de leña del programa',
  },
  {
    title: '¡Incorpora tu Estación al Programa!',
    category: 'Informes',
    description:
      'Si ya cuentas con una estación en operación, incorpórala a la red del programa para sumar esfuerzos en la garantía de la justicia social y el desarrollo sustentable de las comunidades.',
    benefits: [
      'Renovación e imagen corporativa: Transición de marca acompañada institucionalmente con condiciones de adhesión transparentes',
      'Garantía de suministro y eficiencia: Estándares operativos de alta calidad y certidumbre en el abasto continuo de combustible trazable.',
      'Acompañamiento continuo: Asesoría técnica y legal permanente durante todo el proceso de integración a la red estatal.',
    ],
    image: '/images/gaso4.jpeg',
    alt: 'Estufa eficiente instalada en una vivienda',
  },
  {
    title: '¡Conoce tus Beneficios!',
    category: 'Seguridad',
    description:
      'Formar parte de las Gasolineras del Pueblo potencia la competitividad y certidumbre de tu negocio, respaldado por una visión de servicio y compromiso social.',
    benefits: [
      'Identidad y posicionamiento: Reconocimiento de marca e imagen corporativa sólida y cercana a la comunidad.',
      'Excelencia en el servicio: Acompañamiento técnico, capacitación constante del personal y estándares operativos de primer nivel.',
      'Tecnología y control: Suministro garantizado, riguroso control de calidad (litros de a litro) y herramientas digitales de gestión.',
    ],
    image: '/images/gaso5.jpeg',
    alt: 'Programa de estufas eficientes de leña',
  },
];

export const providers= [
  {
    id: 'proveedor',
    h1: 'Proveedor',
    title: 'Proveedor del Programa de Estufas',
    eyebrow: 'Conoce al proveedor que participa en la implementación de soluciones \npara el programa de estufas.',
    description:
      'Fogones María S.A. de C.V. es una empresa mexicana comprometida con mejorar la calidad de vida de las familias mexicanas a través del diseño y fabricación de estufas ecológicas de doble combustión. Cuenta con 15 años de experiencia en innovación y constante reducción de la emisión de gases de efecto invernadero y partículas contaminantes, promoviendo así un ambiente más sano y sostenible para las comunidades.',
    name: 'Fogones María S.A. de C.V.',
    image: '/images/logos/proveedor.svg',
  },
];

export const gasolinerasInfo= [
  {
    id: 'gasolineras',
    h1: '¿De qué se trata?',
    title: 'Franquicias Gasolineras del Pueblo',
    eyebrow: 'Opción de franquicia confiable, socialmente útil y operativamente viable.',
    description:
      'Gasolineras del Pueblo es un modelo de franquicia con identidad tamaulipeca, orientado a acercar combustibles de calidad, precios justos y atención confiable a las regiones productivas, turísticas y sociales del Estado de Tamaulipas. A través de una operación regulada, trazable y acompañada institucionalmente, el proyecto busca integrar a inversionistas y operadores que compartan una visión de servicio, cumplimiento y desarrollo regional soberano.',
    name: '',
    image: '/images/gaso2.jpeg',
  },
];

export interface DonationTransferInfo {
  razonSocial: string;
  rfc: string;
  banco: string;
  beneficiario: string;
  cuenta: string;
  clabe: string;
  referencia: string;
}

export const estufasTransferInfo: DonationTransferInfo = {
  razonSocial: 'RAZÓN SOCIAL DEL PROVEEDOR',
  rfc: 'RFC DEL PROVEEDOR',
  banco: 'BBVA Bancomer',
  beneficiario: 'Fogones Maria',
  cuenta: '0489304878',
  clabe: '012795004893048785',
  referencia: 'DONACION DE ESTUFA EFICIENTE DE LEÑA',
};

export interface DonationItem {
  name: string;
  description?: string;
}

export const donationTools: DonationItem[] = [
  {
    name: 'Juego de llaves Allen',
  },
  {
    name: 'Juego de llaves tipo Torx',
  },
  {
    name: 'Nivelador profesional',
  },
  {
    name: 'Brújulas',
  },
  {
    name: 'Flexómetros de 5 m',
  },
  {
    name: 'Comprobador de tensión',
  },
  {
    name: 'Juego de herramientas aisladas',
  },
  {
    name: 'Juego de desarmador tipo clemero/pinzas dieléctricas',
  },
  {
    name: 'Juego de desarmadores dieléctricos',
  },
];

export const donationEquipment: DonationItem[] = [
  {
    name: 'Lentes de seguridad con protección UV oscuros',
  },
  {
    name: 'Cinta aislante color negro, blanco, verde o rojo',
  },
  {
    name: 'Guantes dieléctricos de neopreno',
  },
  {
    name: 'Guantes dieléctricos de carnaza',
  },
  {
    name: 'Interruptor termomagnético 30 A, 2 polos',
  },
  {
    name: 'Interruptor termomagnético 20 A, 2 polos',
  },
  {
    name: 'Kit de protección lado CA: termomagnético y supresor de picos',
  },
  {
    name: 'Kit de protección lado CD: termomagnético y supresor de picos',
  },
  {
    name: 'Conductor desnudo o verde 12 AWG',
  },
  {
    name: 'Cable fotovoltaico 10 AWG',
  },
  {
    name: 'Conector conduit de ¾"',
  },
  {
    name: 'MC4 par',
  },
  {
    name: 'Conductor 12 AWG blanco',
  },
  {
    name: 'Conductor 12 AWG negro',
  },
  {
    name: 'Botiquín de emergencias',
  },
  {
    name: 'Casco de seguridad con barbiquejo',
  },
  {
    name: 'Chalecos de seguridad de alta visibilidad',
  },
];

export const donationLocation = {
  address: ' México 70, 87138 Cdad. Victoria, Tamps.',
  mapsUrl: 'https://maps.app.goo.gl/9YDpy6AYPxr2Exd67',
};

export const donationImages = {
  herramientas: '/images/logos/pinzas.svg',
  equipo: '/images/logos/equipo.svg',
};

export const interestedTypes = [
  'Persona física',
  'Persona moral',
  'Operador existente',
  'Propietario de predio',
  'Inversionista',
];

export const projectTypes = [
  'Nueva estación',
  'Conversión',
  'Por definir',
];

export const propertyStatus = [
  'Sí',
  'No',
  'En negociación',
];

export const municipalities = [
  'Abasolo',
  'Aldama',
  'Altamira',
  'Antiguo Morelos',
  'Burgos',
  'Bustamante',
  'Camargo',
  'Casas',
  'Ciudad Madero',
  'Ciudad Mier',
  'Ciudad Río Bravo',
  'El Mante',
  'Gómez Farías',
  'González',
  'Guerrero',
  'Gustavo Díaz Ordaz',
  'Hidalgo',
  'Jaumave',
  'Jiménez',
  'Llera',
  'Mainero',
  'Matamoros',
  'Méndez',
  'Mier',
  'Miguel Alemán',
  'Miquihuana',
  'Nuevo Laredo',
  'Nuevo Morelos',
  'Ocampo',
  'Padilla',
  'Palmillas',
  'Reynosa',
  'San Carlos',
  'San Fernando',
  'San Nicolás',
  'Soto la Marina',
  'Tampico',
  'Tula',
  'Valle Hermoso',
  'Victoria',
  'Villagrán',
  'Xicoténcatl',
];

export const contacto = {
  h2: '¡Se parte de Gasolineras del Pueblo!',
  description: 'Contactanos o llena el formulario y conviertete en el cambio que la comunidad necesita.',
  Number: '528343188000,58175',
  mailto: 'correo@ejemplo.gob.mx',
};

export const formData = {
  labelName: 'Nombre completo / razón social *',
  labelEmail: 'Correo electrónico *',
  labelPhone: 'Teléfono *',
  labelMunicipality: 'Municipio *',
  labelProjectType: 'Tipo de proyecto *',
  labelPropertyStatus: 'Estado de la propiedad *',
  labelLocation: 'Ubicación de la Estación *',
  labelInterestedType: 'Tipo de interesado *',
  labelStatement: 'Tipo de Trámite *',
  labelPredio: '¿Cuenta con predio? *',
  labelCoordinates: 'Coordenadas o ubicación aproximada *',
};
