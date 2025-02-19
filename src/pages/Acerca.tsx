import "../styles/Acerca.css";


const Acerca = () => {
  return (
    <section className="acerca-container">
      <div className="seccion izquierda">
        <h2>Metodologia</h2>
        <p>Este proyecto busca...</p>
      </div>

      <div className="seccion centro">
        <h2>Presupuesto</h2>
        <p>Aquí se describe la metodología utilizada...</p>
      </div>

      <div className="seccion derecha">
        <h2>Diseño</h2>
        <div className="imagenes">
          <img src="/images/diseño1.png" alt="Diseño 1" />
          <img src="/images/diseño2.png" alt="Diseño 2" />
        </div>
      </div>

      <div className="seccion presupuesto">
        <h2>Presupuesto y Prototipo</h2>
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
