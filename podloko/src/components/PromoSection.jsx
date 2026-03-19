import Quiz from './Quiz'
import './PromoSection.css'

export default function PromoSection() {
  return (
    <section id="promo" aria-labelledby="promo-heading">
      <div className="section-inner">
        <p className="section-label">Aprende y Juega</p>
        <h2 className="section-title" id="promo-heading">Conocimiento Bíblico</h2>
        <hr className="divider" />
        <p className="intro">
          Pon a prueba lo que has aprendido en nuestros episodios con este breve 
          cuestionario sobre la Biblia y la fe católica.
        </p>

        <div className="panel">
          <Quiz />
        </div>
      </div>
    </section>
  )
}
