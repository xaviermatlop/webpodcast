import { useState } from 'react'
import { EPISODES, TRANSCRIPT } from '../data'
import AudioPlayer from './AudioPlayer'
import './Episodes.css'

export default function Episodes() {
  const [active, setActive]             = useState(0)
  const [showTranscript, setShowTranscript] = useState(false)

  return (
    <section id="episodios" aria-labelledby="ep-heading">
      <div className="section-inner">
        <p className="section-label">Contenido</p>
        <h2 className="section-title" id="ep-heading">Episodios</h2>
        <hr className="divider" />

        {/* Episode list */}
        <ol className="list" aria-label="Lista de episodios">
          {EPISODES.map((ep, i) => (
            <li key={ep.id} className="item">
              <span className="num" aria-hidden="true">
                0{ep.id}
              </span>
              <div className="info">
                <div className="title">{ep.title}</div>
                <div className="meta">{ep.duration} · {ep.desc}</div>
              </div>
              {ep.src && (
                <button
                  className={`epBtn ${active === i ? 'epBtnActive' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`${active === i ? 'Reproduciendo' : 'Reproducir'}: ${ep.title}`}
                  aria-pressed={active === i}
                >
                  {active === i ? '⏸' : '▶'}
                </button>
              )}
            </li>
          ))}
        </ol>

        {/* Player */}
        <AudioPlayer episode={EPISODES[active]} />

        <hr className="divider" />

        {/* Transcript toggle */}
        <button
          className="transcriptToggle"
          onClick={() => setShowTranscript(v => !v)}
          aria-expanded={showTranscript}
          aria-controls="transcript-content"
        >
          {showTranscript ? '▲ Ocultar transcripción' : '▼ Ver transcripción completa'}
        </button>

        {showTranscript && (
          <div
            id="transcript-content"
            className="transcript"
            role="region"
            aria-label="Transcripción completa del episodio"
            tabIndex={0}
            dangerouslySetInnerHTML={{ __html: TRANSCRIPT }}
          />
        )}
      </div>
    </section>
  )
}
