import './footer.css';
export function Footer() {
    return (
        <footer aria-label="footer">
            <address>Quico Christmas Challenge</address>
            <p className="footerP">{new Date().toLocaleDateString()}</p>
        </footer>
    );
}
