import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  return (
    <div className="hero">
      <h1>Smart Errands & Souvenirs</h1>
      <p>
        Your personal assistant for errands and authentic souvenirs.
        <br />
        Market Runs Made Easy At Home & Abroad.
      </p>

      <div className="hero-btns">
        <Link to="/errands" className="btn primary">
          Book an Errand
        </Link>
       
      </div>

      <section className="services-grid">
       
        <ServiceCard title="Gift Sourcing" desc="Find unique gifts." />
        <ServiceCard title="Queue Standing" desc="We stand in line for you." />
      </section>
    </div>
  );
}
