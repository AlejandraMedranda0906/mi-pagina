import React from "react";
import "../styles/Acerca.css"; // Importa los estilos específicos

const Acerca: React.FC = () => {
  return (
    <div className="container">
      <h2>Acerca del Proyecto</h2>
      <p>Selecciona una sección:</p>

      {/* Sección de Metodología */}
      <section className="metodologia">
        <h3>Metodología</h3>
        <p>
          Aquí se describe la metodología utilizada para desarrollar este
          proyecto...
        </p>
      </section>

      {/* Sección de Diseño */}
      <section className="diseño">
        <h3>Diseño</h3>
        <div className="imagenes-grid">
          <img src="/images/diseño1.jpg" alt="Diseño 1" />
          <img src="/images/diseño2.jpg" alt="Diseño 2" />
          <img src="/images/diseño3.jpg" alt="Diseño 3" />
          <img src="/images/diseño4.jpg" alt="Diseño 4" />
        </div>
      </section>
    </div>
  );
};

export default Acerca;
