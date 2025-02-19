import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Acerca from "./pages/Acerca";
import Resultados from "./pages/Resultados";
import Conclusion from "./pages/Conclusion";
import "./global.css";



const App: React.FC = () => {
  return (
    <Router>
      <div id="root">
        <Header />
    
        <main>
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/acerca" element={<Acerca />} />
            <Route path="/resultados" element={<Resultados />} />
            <Route path="/conclusion" element={<Conclusion />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
