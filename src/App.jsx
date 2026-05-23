import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Beranda from "./pages/Beranda";
import Sejarah from "./pages/Sejarah";
import Budaya from "./pages/Budaya";
import Tradisi from "./pages/Tradisi";
import Kuliner from "./pages/Kuliner";
import Destinasi from "./pages/Destinasi";
import PerkembanganTeknologi from "./pages/PerkembanganTeknologi";
import PotensiModern from "./pages/PotensiModern";
import Peta from "./pages/Peta";

function App() {
  return (
    // Tambahkan basename="/batak" di sini supaya React Router tahu jalurnya di GitHub Pages
    <Router basename="/batak">
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/budaya" element={<Budaya />} />
        <Route path="/tradisi" element={<Tradisi />} />
        <Route path="/kuliner" element={<Kuliner />} />
        <Route path="/destinasi" element={<Destinasi />} />
        <Route
          path="/perkembangan-teknologi"
          element={<PerkembanganTeknologi />}
        />
        <Route path="/potensi-modern" element={<PotensiModern />} />
        <Route path="/peta" element={<Peta />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
