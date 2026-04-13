import { useState } from 'react'
import { QUIZ_QUESTIONS } from '../data'
import './Quiz.css'

export default function Quiz() {
  const [idx, setIdx]           = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore]       = useState(0)
  const [finished, setFinished] = useState(false)

  const q = QUIZ_QUESTIONS[idx]

  const answer = (i) => {
    if (selected !== null) return
    setSelected(i)
    if (i === q.correct) setScore(s => s + 1)
  }

  const next = () => {
    if (idx + 1 >= QUIZ_QUESTIONS.length) {
      setFinished(true)
    } else {
      setIdx(i => i + 1)
      setSelected(null)
    }
  }

  const restart = () => {
    setIdx(0); setSelected(null); setScore(0); setFinished(false)
  }

  if (finished) {
    return (
      <div className="wrap" role="region" aria-label="Resultado del juego">
        <div className="header">
          <span>Trivia Bíblica</span>
          <span className="score">Final: {score}/{QUIZ_QUESTIONS.length}</span>
        </div>
        <div className="final">
          <div className="bigScore">{score}/{QUIZ_QUESTIONS.length}</div>
          <p>
            {score === QUIZ_QUESTIONS.length
              ? '¡Perfecto! Tienes un excelente conocimiento de tu fe.'
              : score >= 3
              ? '¡Bien hecho! Sigue profundizando en las Escrituras.'
              : 'Sigue escuchando el podcast y aprendiendo cada día más.'}
          </p>
          <button className="btnRestart" onClick={restart}>
            Volver a jugar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="wrap" role="region" aria-label="Juego de trivia sobre el podcast">
      <div className="header">
        <span>TRIVIAL SOBRE CRISTO REDENTOR ;)</span>
        <span className="score">
          {idx + 1}/{QUIZ_QUESTIONS.length} · Puntos: {score}
        </span>
      </div>

      <div className="area">
        <p className="question" id={`q-${idx}`}>{q.q}</p>

        <div className="options" role="group" aria-labelledby={`q-${idx}`}>
          {q.opts.map((opt, i) => {
            let cls = 'opt'
            if (selected !== null) {
              if (i === q.correct) cls += ` correct`
              else if (i === selected) cls += ` wrong`
            }
            return (
              <button
                key={i}
                className={cls}
                onClick={() => answer(i)}
                disabled={selected !== null}
                aria-pressed={selected === i}
              >
                {opt}
              </button>
            )
          })}
        </div>

        {selected !== null && (
          <>
            <div
              className={`feedback ${selected === q.correct ? 'feedOk' : 'feedErr'}`}
              role="alert"
            >
              {selected === q.correct ? '¡Correcto! ' : 'Incorrecto. '}
              {q.explanation}
            </div>
            <button className="btnNext" onClick={next}>
              {idx + 1 < QUIZ_QUESTIONS.length ? 'Siguiente →' : 'Ver resultado →'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
