import './header.css';

export function Header() {
    const title = 'RoboApp';

    return (
        <header className="title" aria-label="title">
            <h1>{title}</h1>
        </header>
    );
}
