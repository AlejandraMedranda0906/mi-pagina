
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
          <p>Descripción del resultado 1...</p>
        </div>
        {/* Imagen 2 */}
        <div>
          <img src="/prototipo1.jpg" alt="Resultado 2" className="slide-image" />
          <p>Descripción del resultado 2...</p>
        </div>

         {/* Imagen 3 */}
         <div>
          <img src="/resultado3.jpg" alt="Resultado 3" className="slide-image" />
          <p>Descripción del resultado 2...</p>
        </div>
       


        {/* Video */}
        <div>
          <video controls className="slide-video">
            <source src="/resultado2.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
          <p>Descripción del video...</p>
        </div>
      </Slider>
    </div>
  );
};

export default Resultados;