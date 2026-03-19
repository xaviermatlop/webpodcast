import './Hero.css';

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-title">Esto es Morid Pecadores</h1>
      <p className="hero-desc">Tu espacio semanal de reflexión bíblica, historia de la Iglesia y crecimiento espiritual</p>
      
      <div className="hero-latest">
        <h2>Último episodio: Cristo Redentor, el cani supremo del cielo, ¡qué lokuraa, primo!</h2>
        <audio controls>
          <source src="/audio/Cristo-Redentor_-el-cani-supremo-del-cielo_-¡qué-lokuraa_-primo_.mp3" type="audio/mpeg" />
          Tu navegador no soporta el audio.
        </audio>
      </div>
      

    </div>
  )
}
