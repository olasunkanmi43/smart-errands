import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          Smart Errands & Souvenirs <span>by VTF</span>
        </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        {/* <p>Swift 🔘 Reliable 🔘 Stress-Free</p> */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/errands" onClick={() => setMenuOpen(false)}>
            Errands
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

