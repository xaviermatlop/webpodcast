export const PODCAST_INFO = {
  name: 'PodLoko',
  tagline: 'Tu podcast sobre tecnología y diseño web',
  description:
    'Un espacio donde exploramos las últimas tendencias en desarrollo web, ' +
    'diseño de interfaces y tecnología. Cada episodio trae reflexiones, ' +
    'entrevistas y tutoriales para creadores digitales.',
}

export const EPISODES = [
  {
    id: 1,
    title: 'Ep. 1 — Audio y Vídeo en la Web',
    duration: '~20 min',
    // ⬇ Pon tu archivo en /public/audio/ y actualiza este nombre
    src: '/audio/episodio1.mp3',
    desc: 'Introducción al uso de audio y vídeo en HTML5: formatos, etiquetas, buenas prácticas y accesibilidad.',
  },
  {
    id: 2,
    title: 'Ep. 2 — Próximamente',
    duration: '—',
    src: null,
    desc: 'Nuevo episodio en producción. ¡Suscríbete para no perdértelo!',
  },
]

export const TRANSCRIPT = `
<p><strong>Introducción:</strong> Bienvenidos a PodLoko. Soy [Tu Nombre], y hoy vamos a hablar de cómo integrar audio y vídeo en una página web usando HTML5.</p>
<p>En los últimos años, la forma en que consumimos contenido multimedia en la web ha cambiado radicalmente. Gracias a HTML5, ya no necesitamos plugins externos como Flash para reproducir audio o vídeo en el navegador.</p>
<p><strong>Formatos de audio:</strong> Los formatos más utilizados son MP3, compatible con todos los navegadores; AAC, con mayor calidad; WAV, con alta fidelidad pero archivos pesados; y OGG, un formato abierto con menor compatibilidad.</p>
<p><strong>Formatos de vídeo:</strong> Lo más recomendable es usar MP4 (H.264 + AAC), compatible con todos los navegadores. Como alternativa moderna, WebM con VP9 ofrece buena calidad con menor peso.</p>
<p><strong>Etiquetas HTML5:</strong> La etiqueta <code>&lt;audio&gt;</code> nos permite incrustar audio directamente. Con <code>controls</code> mostramos los controles al usuario. La etiqueta <code>&lt;video&gt;</code> funciona de forma similar, añadiendo el atributo <code>poster</code> para una imagen de vista previa.</p>
<p><strong>Accesibilidad:</strong> Es fundamental añadir subtítulos a los vídeos mediante <code>&lt;track&gt;</code> con archivos WebVTT. Esto garantiza accesibilidad para personas con discapacidad auditiva.</p>
<p><strong>Buenas prácticas:</strong> Evitad el autoplay, ya que interrumpe al usuario. Usad <code>preload="metadata"</code> para mejorar los tiempos de carga. Compressed vuestros archivos con FFmpeg o HandBrake.</p>
<p><strong>Cierre:</strong> Espero que os haya resultado útil. Si tenéis preguntas, escribidme desde el formulario de contacto. ¡Hasta el próximo episodio!</p>
`

export const QUIZ_QUESTIONS = [
  {
    q: '¿Qué formato de audio es compatible con TODOS los navegadores?',
    opts: ['OGG', 'AAC', 'MP3', 'WAV'],
    correct: 2,
    explanation: 'MP3 (.mp3) es el estándar con compatibilidad universal en todos los navegadores modernos.',
  },
  {
    q: '¿Qué atributo de <video> muestra una imagen antes de reproducir?',
    opts: ['preload', 'controls', 'poster', 'src'],
    correct: 2,
    explanation: "El atributo 'poster' especifica la imagen que se muestra antes de que el vídeo empiece.",
  },
  {
    q: '¿Qué etiqueta se usa para añadir subtítulos a un vídeo en HTML5?',
    opts: ['<caption>', '<track>', '<subtitle>', '<text>'],
    correct: 1,
    explanation: 'La etiqueta <track> con archivos WebVTT es la forma correcta de añadir subtítulos accesibles.',
  },
  {
    q: "¿Cuál es el valor recomendado de 'preload' para mejorar tiempos de carga?",
    opts: ['auto', 'none', 'metadata', 'full'],
    correct: 2,
    explanation: "preload='metadata' carga solo la duración y dimensiones sin descargar el contenido completo.",
  },
  {
    q: "¿Por qué no se recomienda el atributo 'autoplay'?",
    opts: [
      'Porque no funciona en Safari',
      'Porque consume más ancho de banda',
      'Porque afecta negativamente la experiencia del usuario',
      'Porque está obsoleto en HTML5',
    ],
    correct: 2,
    explanation: 'El autoplay interrumpe al usuario sin su consentimiento, afectando la experiencia y la accesibilidad.',
  },
]
