import './NavBar.css';

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="logo">Morid Pecadores</div>
      <nav>
        <a href="#home">Inicio</a>
        <a href="#episodios">Episodios</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  )
}
