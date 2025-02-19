
import "../styles/Acerca.css";

const Acerca = () => {
  return (
    <section className="acerca-container">
      <div className="seccion">
        <h2>Metodología</h2>
        <div className="metodologia-contenido">
          <p>
            En el proyecto de investigación se aplicó un diseño de investigación “Desing Thinking”, debido a sus múltiples ventajas: empatizar, definir, idear, prototipar y probar; se usa un enfoque de tipo cuantitativo y una metodología aplicada. En una población muestra un gimnasio en la parroquia Ricaurte.
          </p>
          <img src="/images/diseño2.png" alt="Diseño 2" />
        </div>
      </div>

      <div className="seccion">
        <h2>Presupuesto</h2>
        <img src="/images/presupuesto.png" alt="Presupuesto" />
        <p>Aquí se describe la metodología utilizada...</p>
      </div>

      {/* SECCIÓN PROTOTIPO */}
      <div className="seccion">
        <h2>Prototipo</h2>
        <div className="media-container">
         
          <img src="/images/prototipo.png" alt="Prototipo" />
          <img src="/images/prototipo.png" alt="Prototipo" />
        </div>
      </div>

      {/* SECCIÓN BASE DE DATOS (Ahora con botón) */}
      <div className="seccion">
        <h2>Diseño de Base de Datos</h2>
        <div className="imagenes">
        <img src="/basedatos.jpg" alt="Diseño de Base de Datos" />


        </div>
        <p>Puedes ver el diseño de la base de datos en el siguiente enlace:</p>
        <a 
  href="https://drive.google.com/file/d/1at_ZHFXqwp15iLyxm3t8qkcSepPLHhzT/view?usp=sharing" 
  target="_blank" 
  rel="noopener noreferrer"
  className="boton"
>
  Ver
</a>




      </div>
    </section>
  );
};

export default Acerca;
