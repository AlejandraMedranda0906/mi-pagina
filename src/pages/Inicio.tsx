import "../styles/Inicio.css";


const Inicio: React.FC = () => {
    return (
      <div className="inicio-container">
        <section className="portada">
          <img src="/portada1.png" alt="Portada del proyecto" className="imagen-portada" />
          <div className="overlay">
            <h1>Dinamo</h1>
            <p>Descripción breve del proyecto</p>
            <button className="btn-mas-info">Más información</button>
          </div>
        </section>
  
        <section className="contenido">
          <h2>Bienvenidos a nuestro proyecto</h2>
          <p>Aquí va más información sobre el proyecto...</p>
          <p>Secciones adicionales...</p>
        </section>
      </div>
    );
  };
export default Inicio;