import { Navbar } from "./components/Navbar";
import { Button } from "./components/Button";
import './index.css';

export default function App() {
    return (
        <header className="hero-header">
            <Navbar />
            
            <div className="hero-content">
                <div className="hero-text">
                    <h1>El control de tu dinero, más simple y seguro</h1>
                    <p>Gestiona tus ahorros, paga sin comisiones y haz crecer tu capital desde una sola plataforma.</p>
                    <div className="hero-buttons">
                        <Button texto="Abrir cuenta gratis" variante="primary" />
                        <Button texto="Ver comisiones" variante="secondary" />
                    </div>
                    <span className="hero-note">Sin costos ocultos, abre tu cuenta en minutos.</span>
                </div>
                
                <div className="hero-image">
                    <img src="/img/imghero.png" alt="Interfaz de la billetera digital" />
                </div>
            </div>
        </header>
    );
}