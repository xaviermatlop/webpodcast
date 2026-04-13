import { useState } from 'react'
import './Contact.css'

const EMPTY = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm]   = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent]   = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'El nombre es obligatorio.'
    if (!form.email.trim())   e.email   = 'El correo es obligatorio.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Introduce un correo válido.'
    if (!form.message.trim()) e.message = 'El mensaje no puede estar vacío.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    // clear error on edit
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    /*
      En producción, envía los datos a un servicio como:
        - Formspree:  fetch('https://formspree.io/f/TU_ID', { method:'POST', body: JSON.stringify(form) })
        - EmailJS:    emailjs.send(...)
        - tu propio backend
    */
    console.log('Formulario enviado:', form)
    setSent(true)
    setForm(EMPTY)
  }

  return (
    <section id="contacto" aria-labelledby="contact-heading">
      <div className="section-inner">
        <p className="section-label">Participa</p>
        <h2 className="section-title" id="contact-heading">Contacto y sugerencias</h2>
        <hr className="divider" />

        <p className="intro">
          ¿Tienes una idea para un episodio, quieres participar o simplemente
          quieres decir hola? Escríbenos y te responderemos lo antes posible.
        </p>

        {sent ? (
          <div className="success" role="alert">
            ¡Mensaje enviado! Gracias por escribirnos, te responderemos pronto.
          </div>
        ) : (
          <form
            className="form"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Formulario de contacto"
          >
            {/* Name */}
            <div className="group">
              <label htmlFor="cf-name" className="label">
                Nombre <span aria-hidden="true">*</span>
              </label>
              <input
                id="cf-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                autoComplete="name"
                aria-required="true"
                aria-describedby={errors.name ? 'err-name' : undefined}
                aria-invalid={!!errors.name}
                className={`input ${errors.name ? 'inputErr' : ''}`}
              />
              {errors.name && (
                <span id="err-name" className="errMsg" role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="group">
              <label htmlFor="cf-email" className="label">
                Correo electrónico <span aria-hidden="true">*</span>
              </label>
              <input
                id="cf-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@correo.com"
                autoComplete="email"
                aria-required="true"
                aria-describedby={errors.email ? 'err-email' : undefined}
                aria-invalid={!!errors.email}
                className={`input ${errors.email ? 'inputErr' : ''}`}
              />
              {errors.email && (
                <span id="err-email" className="errMsg" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Message */}
            <div className="group">
              <label htmlFor="cf-message" className="label">
                Mensaje <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="cf-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí…"
                aria-required="true"
                aria-describedby={errors.message ? 'err-message' : undefined}
                aria-invalid={!!errors.message}
                className={`textarea ${errors.message ? 'inputErr' : ''}`}
              />
              {errors.message && (
                <span id="err-message" className="errMsg" role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            <button type="submit" className="submit">
              Enviar mensaje →
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
