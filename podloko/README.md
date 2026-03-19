# PodLoko 🎙️

Proyecto de práctica para **Disseny d'interfícies web (M9)** —  
Web de podcast hecha con **React + Vite**, accesible (WCAG AA) y lista para desplegar.

---

## Estructura del proyecto

```
podloko/
├── public/
│   ├── audio/          ← Pon aquí tus archivos .mp3
│   └── video/          ← Pon aquí promo.mp4 / promo.webm / poster.jpg
├── src/
│   ├── components/
│   │   ├── NavBar.jsx / .module.css
│   │   ├── Hero.jsx / .module.css
│   │   ├── Episodes.jsx / .module.css
│   │   ├── AudioPlayer.jsx / .module.css
│   │   ├── Quiz.jsx / .module.css
│   │   ├── PromoSection.jsx / .module.css
│   │   ├── Contact.jsx / .module.css
│   │   └── Footer.jsx / .module.css
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css       ← tokens globales
│   └── data.js         ← textos, episodios, preguntas del quiz
├── index.html
├── vite.config.js
└── package.json
```

---

## 1 · Instalación y desarrollo local

```bash
npm install
npm run dev
# Abre http://localhost:5173
```

---

## 2 · Añadir tu audio

1. Copia tu archivo a `public/audio/episodio1.mp3`
2. En `src/data.js`, ajusta el campo `src` del primer episodio:
   ```js
   src: '/audio/episodio1.mp3',
   ```
3. Actualiza `title`, `duration` y `desc` con los datos reales.
4. Edita también `TRANSCRIPT` con la transcripción real del episodio.

---

## 3 · Añadir el vídeo promocional

Abre `src/components/PromoSection.jsx` y sigue los comentarios:

- **Opción A** (archivo local): descomenta el bloque `<video>` y copia tu vídeo en `public/video/promo.mp4`.
- **Opción B** (YouTube): descomenta el `<iframe>` y sustituye `TU_VIDEO_ID`.

---

## 4 · Personalizar contenido

Edita `src/data.js`:

| Variable | Qué cambia |
|---|---|
| `PODCAST_INFO` | Nombre, tagline y descripción del podcast |
| `EPISODES` | Lista de episodios (título, duración, src, descripción) |
| `TRANSCRIPT` | Transcripción completa (HTML) |
| `QUIZ_QUESTIONS` | Preguntas, opciones y respuesta correcta del trivia |

---

## 5 · Formulario de contacto real

En `src/components/Contact.jsx`, en la función `handleSubmit`, añade la llamada a tu servicio:

```js
// Ejemplo con Formspree
await fetch('https://formspree.io/f/TU_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

---

## 6 · Build y despliegue

```bash
npm run build     # genera la carpeta /dist
npm run preview   # previsualiza el build en local
```

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
Arrastra la carpeta `dist/` a [netlify.com/drop](https://app.netlify.com/drop).

### Cloudflare Pages
Conecta el repositorio en Cloudflare Pages → Build command: `npm run build` → Output: `dist`.

---

## 7 · Accesibilidad (WCAG AA)

- ✅ Estructura semántica: `<nav>`, `<main>`, `<section>`, `<footer>`, headings en orden
- ✅ Skip link al contenido principal
- ✅ `aria-label` y `aria-labelledby` en todas las regiones
- ✅ Foco visible en todos los elementos interactivos
- ✅ Contraste ≥ 4.5:1 (texto sobre fondo)
- ✅ Controles de audio accesibles con `aria-label` y `aria-valuetext`
- ✅ Formulario con labels, `aria-required`, `aria-invalid` y mensajes de error asociados
- ✅ Transcripción del podcast incluida

Verifica con **Lighthouse** (DevTools → Lighthouse → Accessibility) y **WAVE** (wave.webaim.org).

---

## Licencia

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — puedes compartir y adaptar citando la fuente.
