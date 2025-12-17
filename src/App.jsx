import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Errands from "./pages/Errands";
// import Souvenirs from "./pages/Souvenirs";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ minHeight: "70vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/errands" element={<Errands />} />
          {/* <Route path="/souvenirs" element={<Souvenirs />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    
  );
}
