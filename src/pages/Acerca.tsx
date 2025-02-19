
import "../styles/Acerca.css";

const Acerca = () => {
  return (
    <section className="acerca-container">

      <div className="seccion">
        <h2>Metodología</h2>
        <div className="metodologia-contenido">
          <p>
            En el proyecto de investigación se aplicó un diseño de investigación “Desing Thinking”, debido a sus múltiples ventajas: empatizar, definir, idear, prototipar y probar; se usa un enfoque de tipo cuantitativo y una metodología aplicada. En una población muestra un gimnasio en la parroquia Ricaurte.</p>
          <img src="/metodologia1.jpg" alt="Metodologia" />
        </div>
      </div>


      <div className="seccion">
        <h2>Presupuesto</h2>
        <img src="/presupuesto.png" alt="Presupuesto" />
        <p>Presupuesto de materiales utilizados</p>
      </div>

      {/* SECCIÓN PROTOTIPO */}
      <div className="seccion">
        <h2>Prototipo</h2>
        <div className="media-container">
        <p>Uso del  Tinkercad para la maquetación del dispositivo electrónico.</p>
         
          <img src="//circuito.png" alt="Prototipo" />
          <img src="//Prototipo1.jpg" alt="Prototipo" />
         
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

      {/* SECCIÓN REPOSITORIO FRONTEND */}
<div className="seccion">
  <h2>Diseño de Figma</h2>
  
  <div className="media-container">
         
         <img src="/Dinamo3.jpg" alt="Diseño de figma" />
         <img src="/dinamo2.jpg" alt="Diseño de figma" />

         <img src="/Dinamo1.jpg" alt="Diseño de figma" />
  </div>
  <p>Diseño de la aplicación en Figma</p>
  <a 
    href="https://www.figma.com/design/bTwn6HMEiWWY18D8kL2EOg/Bicycle-Charge?node-id=0-1&p=f&t=eQlKsCeyHlmLgRxp-0"  
    target="_blank" 
    rel="noopener noreferrer"
    className="boton"
  >
    Ver Código
  </a>
</div>


     
      {/* SECCIÓN REPOSITORIO FRONTEND */}
<div className="seccion">
  <h2>Repositorio de Frontend</h2>
  <div className="imagenes">
    <img src="/frontend.jpg" alt="Repositorio de Frontend" />
  </div>
  <p>Para el desarrollo del sistema se usó en React Native con expo Android</p>
  <a 
    href="https://github.com/AlejandraMedranda0906/charge-battery.git"  
    target="_blank" 
    rel="noopener noreferrer"
    className="boton"
  >
    Ver Código
  </a>
</div>
    </section>
  );
};

export default Acerca;
