import { Button } from "./Button";

export function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <span className="logo-icon">🔵</span> WalletPay
            </div>
            <ul className="nav-links">
                <li><a href="#">Productos ▾</a></li>
                <li><a href="#">Casos de uso ▾</a></li>
                <li><a href="#">Empresas</a></li>
                <li><a href="#">Precios</a></li>
            </ul>
            <div className="nav-actions">
                <a href="#" className="nav-link">Iniciar sesión</a>
                <Button texto="Crear cuenta gratis" variante="primary" />
            </div>
        </nav>
    );
}