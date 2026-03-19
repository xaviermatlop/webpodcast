import { useState } from 'react'
import Quiz from './Quiz'
import './PromoSection.css'

export default function PromoSection() {
  const [tab, setTab] = useState('game')

  return (
    <section id="promo" aria-labelledby="promo-heading">
      <div className="section-inner">
        <p className="section-label">Promoción</p>
        <h2 className="section-title" id="promo-heading">Material promocional</h2>
        <hr className="divider" />
        <p className="intro">
          Descubre nuestro contenido promocional: un juego de trivia para poner
          a prueba lo aprendido o un vídeo de presentación del podcast.
        </p>

        {/* Tabs */}
        <div className="tabs" role="tablist" aria-label="Tipo de contenido promocional">
          <button
            role="tab"
            className={`tabBtn ${tab === 'game' ? 'tabActive' : ''}`}
            aria-selected={tab === 'game'}
            aria-controls="panel-game"
            id="tab-game"
            onClick={() => setTab('game')}
          >
            🎮 Juego Trivia
          </button>
          <button
            role="tab"
            className={`tabBtn ${tab === 'video' ? 'tabActive' : ''}`}
            aria-selected={tab === 'video'}
            aria-controls="panel-video"
            id="tab-video"
            onClick={() => setTab('video')}
          >
            🎬 Vídeo
          </button>
        </div>

        {/* Game panel */}
        <div
          role="tabpanel"
          id="panel-game"
          aria-labelledby="tab-game"
          hidden={tab !== 'game'}
          className="panel"
        >
          <Quiz />
        </div>

        {/* Video panel */}
        <div
          role="tabpanel"
          id="panel-video"
          aria-labelledby="tab-video"
          hidden={tab !== 'video'}
          className="panel"
        >
          {/*
            ══════════════════════════════════════════════════════
            OPCIÓN A — archivo local en /public/video/promo.mp4
            Descomenta este bloque y borra el placeholder de abajo.
            ══════════════════════════════════════════════════════
            <video
              className="videoEmbed"
              controls
              preload="metadata"
              poster="/video/poster.jpg"
              aria-label="Vídeo de presentación de PodLoko"
            >
              <source src="/video/promo.mp4"  type="video/mp4" />
              <source src="/video/promo.webm" type="video/webm" />
              <track
                src="/video/subtitulos.vtt"
                kind="subtitles"
                srcLang="es"
                label="Español"
                default
              />
              Tu navegador no soporta el elemento de vídeo.
            </video>

            ══════════════════════════════════════════════════════
            OPCIÓN B — embed de YouTube
            Sustituye TU_VIDEO_ID por el ID real de tu vídeo.
            ══════════════════════════════════════════════════════
            <iframe
              className="videoEmbed"
              src="https://www.youtube.com/embed/TU_VIDEO_ID"
              title="Vídeo de presentación de PodLoko"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          */}

          {/* ── Placeholder visible hasta que añadas el vídeo ── */}
          <div
            className="placeholder"
            role="img"
            aria-label="Espacio reservado para el vídeo de presentación"
          >
            <span className="placeholderIcon">🎬</span>
            <p>
              Aquí irá tu vídeo de presentación.<br />
              Lee los comentarios en <code>PromoSection.jsx</code> para
              activar la Opción A (archivo local) o la Opción B (YouTube embed).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
