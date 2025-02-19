import "../styles/Inicio.css";

const Inicio: React.FC = () => {
  return (
    <div className="inicio-container">
      {/* SECCIÓN PORTADA */}
      <section className="portada">
        <img src="/portada1.png" alt="Portada del proyecto" className="imagen-portada" />
        <div className="overlay">
          <h1>Dinamo</h1>
          <h2>
            Generación de energía limpia mediante un dinamo en Bicicletas estáticas para la carga de dispositivos móviles y la reducción del impacto ambiental.
          </h2>
        </div>
      </section>

      {/* SECCIÓN CONTENIDO */}
      <section className="contenido justificacion-introduccion">
  <h2>Justificación</h2>
  <p>La implementación de dinamos en bicicletas estáticas permite generar energía limpia mientras se realiza ejercicio, reduciendo la dependencia de fuentes no renovables.</p>
</section>

{/* Separador */}
<div className="separador"></div>

<section className="contenido justificacion-introduccion">
  <h2>Introducción</h2>
  <p>El proyecto busca implementar un sistema que produzca energía limpia en los gimnasios a través de un generador colocado en bicicletas estáticas. Esta iniciativa utiliza la energía del movimiento del pedaleo para transformarla en electricidad, ayudando a la sostenibilidad y fomentando la actividad física.</p>
</section>


      {/* SECCIÓN OBJETIVOS */}
      <section className="objetivos-container">
        <div className="objetivo-card">
          <h3>Objetivo General</h3>
          <p>Implementar el sistema de energía limpia mediante un dinamo en bicicletas estáticas ubicadas dentro de los gimnasios de la parroquia Ricaurte para cargar dispositivos móviles.</p>
        </div>

        <div className="objetivo-card">
          <h3>Objetivos Específicos</h3>
          <ul>
            <li>Investigar en diferentes fuentes bibliográficas los sistemas generadores de energía limpia</li>
            <li>Determinar la metodología de investigación.</li>
            <li>Implementar el circuito electrónico Dinamo en las bicicletas estáticas dentro de un gimnasio.</li>
            <li>Analizar la relación entre el tiempo de uso y nivel de carga de la batería.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
