export function Button({ texto, variante = "primary", href = "#" }) {
    const className = variante === "primary" ? "btn-primary" : "btn-secondary";
    return (
        <a href={href} className={`btn ${className}`}>
            {texto}
        </a>
    );
}