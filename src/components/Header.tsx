import { useState } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Dinamo</h1>
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><a href="#" className="active">Inicio</a></li>
            <li><a href="#">Acerca</a></li>
            <li><a href="#">Resultados</a></li>
            <li><a href="#">Conclusión</a></li>
            <li><a href="#">Presupuesto</a></li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
