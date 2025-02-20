
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "../styles/Resultados.css";

const Resultados: React.FC = () => {
  const settings = {
    dots: true,         // Muestra puntos de navegación
    infinite: true,     // Hace que el carrusel sea infinito
    speed: 500,        // Velocidad del deslizamiento
    slidesToShow: 1,    // Muestra una imagen a la vez
    slidesToScroll: 1,  // Se mueve de una en una
    autoplay: true,     // Desliza automáticamente
    autoplaySpeed: 3000, // Cada 3 segundos
    arrows: true,       // Muestra flechas de navegación
  };

  return (
    <div className="resultados-container">
      <h2>Resultados</h2>
      <Slider {...settings}>
        {/* Imagen 1 */}
        <div>
          <img src="/resultado1.jpg" alt="Resultado 1" className="slide-image" />
         
        </div>
        {/* Imagen 2 */}
        <div>
          <img src="/Prototipo1.jpg" alt="Resultado 2" className="slide-image" />
         
        </div>

         {/* Imagen 3 */}
         <div>
          <img src="/grafico.jpg" alt="Resultado 3" className="slide-image" />
         
        </div>
       


     
            
       
         
        
      </Slider>
    </div>
  );
};

export default Resultados;