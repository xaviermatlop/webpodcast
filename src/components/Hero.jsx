import './Hero.css';

export default function Hero() {
  return (
    <div className="hero">
      <h2 className="hero-title">Esto es Morid Pecadores</h2>
      <p className="hero-desc">Tu espacio semanal de reflexión bíblica, historia de la Iglesia y crecimiento espiritual</p>
      
      <div className="hero-latest">
        <h3>Último episodio: Cristo Redentor, el cani supremo del cielo, ¡qué lokuraa, primo!</h3>
        <audio controls>
          <source src="/audio/Cristo-Redentor_-el-cani-supremo-del-cielo_-¡qué-lokuraa_-primo_.mp3" type="audio/mpeg" />
          Tu navegador no soporta el audio.
        </audio>
      </div>
      

    </div>
  )
}
