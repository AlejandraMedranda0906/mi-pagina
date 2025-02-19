import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Acerca from "./pages/Acerca";
import Presupuesto from "./pages/Presupuesto";
import Metodologia from "./pages/Metodologia";
import Galeria from "./pages/Galeria";
import Resultados from "./pages/Resultados";
import Conclusion from "./pages/Conclusion";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/acerca/presupuesto" element={<Presupuesto />} />
        <Route path="/acerca/metodologia" element={<Metodologia />} />
        <Route path="/acerca/galeria" element={<Galeria />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/conclusion" element={<Conclusion />} />
      </Routes>
    </Router>
  );
};

export default App;
