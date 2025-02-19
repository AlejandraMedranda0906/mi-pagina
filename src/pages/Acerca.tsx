import "../styles/Acerca.css";

const Acerca = () => {
  return (
    <section className="acerca-container">
      <div className="seccion derecha">
        <h2>Metodología</h2>
        <div className="metodologia-contenido">
          <p>Este proyecto busca...</p>
          <img src="/images/diseño2.png" alt="Diseño 2" />
        </div>
      </div>

      <div className="seccion centro">
        <h2>Presupuesto</h2>
        <img src="/images/diseño2.png" alt="Diseño 2" />
        <p>Aquí se describe la metodología utilizada...</p>
      </div>

      <div className="seccion derecha">
        <h2>Presupuesto</h2>
        <div className="imagenes">
          <img src="/images/diseño2.png" alt="Diseño 2" />
          <p>Aquí se describe la metodología utilizada...</p>
        </div>
      </div>

      <div className="seccion prototipo">
        <h2>Prototipo</h2>
        <div className="media-container">
          <video controls>
            <source src="/videos/prototipo.mp4" type="video/mp4" />
          </video>
          <img src="/images/prototipo.png" alt="Prototipo" />
        </div>
      </div>
    </section>
  );
};

export default Acerca;
