export const PODCAST_INFO = {
  name: 'Pescadores de Audio',
  tagline: 'Tu red de contenido católico',
  description:
    'Un espacio donde exploramos las Sagradas Escrituras, la tradición ' +
    'de la Iglesia y la fe católica. Cada episodio trae reflexiones, ' +
    'entrevistas y enseñanzas para el día a día.',
}

export const EPISODES = [
  {
    id: 1,
    title: 'Ep. 1 — El Sermón del Monte',
    duration: '~20 min',
    src: '/audio/episodio1.mp3',
    desc: 'Un análisis profundo de las Bienaventuranzas y su significado para la vida moderna.',
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
<p><strong>Introducción:</strong> Bienvenidos a Pescadores de Audio. Soy [Tu Nombre], y hoy vamos a meditar sobre el Sermón del Monte, uno de los pasajes más hermosos del Evangelio según Mateo.</p>
<p>Cristo sube al monte y comienza a enseñar a las multitudes, entregando las Bienaventuranzas, que son el corazón de su mensaje y el camino a la verdadera felicidad.</p>
<p><strong>Las Bienaventuranzas:</strong> "Bienaventurados los pobres en espíritu, porque de ellos es el reino de los cielos". Esta primera enseñanza nos invita a la humildad y a depender totalmente de Dios frente a las riquezas del mundo.</p>
<p><strong>Ser Sal y Luz:</strong> Jesús también nos llama a ser "la sal de la tierra y la luz del mundo". Esto significa que nuestra fe no debe quedar oculta, sino que debe dar sabor y alumbrar a aquellos que nos rodean con buenas obras.</p>
<p><strong>Amar a los enemigos:</strong> Una de las enseñanzas más difíciles pero transformadoras es el llamado a amar a nuestros enemigos y rezar por los que nos persiguen, reflejando así el amor incondicional del Padre.</p>
<p><strong>Cierre:</strong> Espero que esta reflexión te haya sido de provecho espiritual. Si tienes preguntas o peticiones de oración, escríbenos. ¡Que Dios te bendiga y hasta el próximo episodio!</p>
`

export const QUIZ_QUESTIONS = [
  {
    q: '¿Cuántos libros tiene la Biblia Católica en total?',
    opts: ['66', '72', '73', '80'],
    correct: 2,
    explanation: 'La Biblia Católica consta de 73 libros: 46 del Antiguo Testamento y 27 del Nuevo Testamento.',
  },
  {
    q: '¿Quién fue el primer Papa de la Iglesia Católica?',
    opts: ['San Pablo', 'San Juan', 'San Pedro', 'Santiago'],
    correct: 2,
    explanation: 'Cristo encomendó a San Pedro el liderazgo de la Iglesia, diciéndole "Tú eres Pedro, y sobre esta piedra edificaré mi Iglesia".',
  },
  {
    q: '¿Cuál es el primer libro de la Biblia?',
    opts: ['Éxodo', 'Génesis', 'Salmos', 'Isaías'],
    correct: 1,
    explanation: 'El libro del Génesis relata los orígenes del mundo, la humanidad y el pueblo de Dios.',
  },
  {
    q: '¿En qué ciudad nació Jesús?',
    opts: ['Nazaret', 'Jerusalén', 'Belén', 'Jericó'],
    correct: 2,
    explanation: 'Jesús nació en Belén de Judea, cumpliendo la profecía de Miqueas.',
  },
  {
    q: '¿Qué sacramento nos incorpora a la Iglesia y borra el pecado original?',
    opts: ['Confirmación', 'Eucaristía', 'Reconciliación', 'Bautismo'],
    correct: 3,
    explanation: 'El Bautismo es el sacramento de iniciación que nos hace hijos de Dios y miembros de la Iglesia.',
  },
]
