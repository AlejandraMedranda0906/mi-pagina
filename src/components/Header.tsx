import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; 


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Dinamo</h1>
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><Link to="/inicio" className="active">Inicio</Link></li>
            <li><Link to="/acerca">Acerca</Link></li>
            <li><Link to="/resultados">Resultados</Link></li>
            <li><Link to="/conclusion">Conclusión</Link></li>
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
