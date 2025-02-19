
import "../styles/Acerca.css";

const Acerca = () => {
  return (
    <section className="acerca-container">

<div className="seccion">
  <h2>Metodología</h2>
  <div className="metodologia-contenido">
    <p>
      En el proyecto de investigación se aplicó un diseño de investigación “Design Thinking”, debido a sus múltiples ventajas: empatizar, definir, idear, prototipar y probar; se usa un enfoque de tipo cuantitativo y una metodología aplicada. En una población muestra un gimnasio en la parroquia Ricaurte.
    </p>
    <div className="imagen-metodologia">
      <img src="/metodologia1.jpg" alt="Metodologia" />
    </div>
  </div>
</div>

      <div className="seccion">
        <h2>Presupuesto</h2>
        <div className="media-container">

        <img src="/presupuesto1.jpg" alt="Presupuesto" />

        <img src="/presupuestoo.jpg" alt="Presupuesto" />
        
      </div>
      </div>

      {/* SECCIÓN PROTOTIPO */}
      <div className="seccion">
        <h2>Circuito</h2>
        <div className="media-container">
       
         
          <img src="/circuito.png" alt="Circuito" />
          <img src="/Prototipo1.jpg" alt="Circuito" />
         
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
  Ver Código
</a>

</div>
{/* SECCIÓN PROTOTIPO */}
<div className="seccion">
  <h2>Prototipo</h2>
  
  <div className="media-container prototipo-container"> {/* Agregamos la clase aquí */}
    <img src="/Dinamo3.jpg" alt="Prototipo" />
    <img src="/dinamo2.jpg" alt="Prototipo" />
    <img src="/Dinamo1.jpg" alt="Prototipo" />
  </div>

  <p>Diseño de la aplicación en Figma</p>
  <p>Para el desarrollo del sistema se usó en React Native con expo Android</p>

  <a 
    href="https://www.figma.com/design/bTwn6HMEiWWY18D8kL2EOg/Bicycle-Charge?node-id=0-1&p=f&t=eQlKsCeyHlmLgRxp-0"  
    target="_blank" 
    rel="noopener noreferrer"
    className="boton"
  >
    FIGMA
  </a>

  <a 
    href="https://github.com/AlejandraMedranda0906/charge-battery.git"  
    target="_blank" 
    rel="noopener noreferrer"
    className="boton"
  >
    FRONTEND
  </a>

</div>



     
    

    </section>
  );
};

export default Acerca;
