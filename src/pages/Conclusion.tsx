import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Conclusion.css"; // Archivo CSS para estilos

const Conclusion: React.FC = () => {
const [mostrarTexto, setMostrarTexto] = useState(false);

return (
    <div className="conclusion-container">
 <h1>Conclusión</h1>

      {/* Botón para mostrar/ocultar el cuadro de texto */}
    <button className="toggle-btn" onClick={() => setMostrarTexto(!mostrarTexto)}>
        {mostrarTexto ? "Ocultar Reflexión" : "Mostrar Reflexión"}
    </button>

      {/* Cuadro de texto que se despliega */}
    {mostrarTexto && (
        <div className="cuadro-texto">
        <h2>Reflexión Final</h2>
        <p>
            A lo largo de este proyecto, hemos demostrado cómo la generación de energía 
            limpia mediante bicicletas estáticas puede ser una solución viable y sostenible 
            para reducir el impacto ambiental. Esta iniciativa no solo fomenta la conciencia 
            ecológica, sino que también promueve un estilo de vida saludable.
        </p>
        </div>
    )}

      {/* Subnavegación dentro de Conclusión */}
    <nav>
        <ul>
    <li><Link to="futuro">Futuro del Proyecto</Link></li>
    <li><Link to="referencias">Referencias</Link></li>
        </ul>
    </nav>

      {/* Outlet para mostrar subpáginas */}
    <Outlet />
    </div>
);
};

export default Conclusion;
