import { useRef, useState } from 'react'
import './AudioPlayer.css'

function fmt(s) {
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${String(sec).padStart(2, '0')}`
}

export default function AudioPlayer({ episode }) {
  const audioRef = useRef(null)
  const [playing, setPlaying]   = useState(false)
  const [current, setCurrent]   = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume]     = useState(1)

  const togglePlay = () => {
    const a = audioRef.current
    if (!a) return
    if (playing) { a.pause(); setPlaying(false) }
    else         { a.play().catch(() => {}); setPlaying(true) }
  }

  const handleSeek = (e) => {
    if (audioRef.current && duration) {
      audioRef.current.currentTime = Number(e.target.value)
      setCurrent(Number(e.target.value))
    }
  }

  const handleVolume = (e) => {
    const v = Number(e.target.value)
    setVolume(v)
    if (audioRef.current) audioRef.current.volume = v
  }

  return (
    <div
      className="card"
      role="region"
      aria-label={`Reproductor: ${episode.title}`}
    >
      <div className="epTitle">{episode.title}</div>
      <div className="epMeta">{episode.desc}</div>

      {episode.src ? (
        <>
          <audio
            ref={audioRef}
            preload="metadata"
            onTimeUpdate={() => setCurrent(audioRef.current?.currentTime ?? 0)}
            onLoadedMetadata={() => setDuration(audioRef.current?.duration ?? 0)}
            onEnded={() => setPlaying(false)}
            aria-label={episode.title}
          >
            <source src={episode.src} type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>

          <div className="controls">
            <button
              className="playBtn"
              onClick={togglePlay}
              aria-label={playing ? 'Pausar episodio' : 'Reproducir episodio'}
            >
              {playing ? '⏸' : '▶'}
            </button>

            <div className="progressWrap">
              <input
                type="range"
                className="progressBar"
                min={0}
                max={duration || 0}
                step={0.1}
                value={current}
                onChange={handleSeek}
                aria-label="Progreso de reproducción"
                aria-valuemin={0}
                aria-valuemax={duration || 0}
                aria-valuenow={current}
                aria-valuetext={`${fmt(current)} de ${fmt(duration)}`}
              />
              <div className="timeRow">
                <span>{fmt(current)}</span>
                <span>{duration ? fmt(duration) : '--:--'}</span>
              </div>
            </div>

            <div className="volumeWrap">
              <label htmlFor="vol">Vol</label>
              <input
                id="vol"
                type="range"
                className="volumeSlider"
                min={0} max={1} step={0.05}
                value={volume}
                onChange={handleVolume}
                aria-label="Control de volumen"
              />
            </div>
          </div>
        </>
      ) : (
        <p className="soon">Este episodio estará disponible pronto.</p>
      )}
    </div>
  )
}
