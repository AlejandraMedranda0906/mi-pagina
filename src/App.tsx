import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Inicio from "./pages/Inicio";
import Acerca from "./pages/Acerca";
import Resultados from "./pages/Resultados";
import Conclusion from "./pages/Conclusion";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/conclusion" element={<Conclusion />} />
      </Routes>
    </Router>
  );
};

export default App;
