import './header.css';

export function Header({ children }: { children: JSX.Element }) {
    const title = 'RoboApp';

    return (
        <header className="title" aria-label="title">
            <h1>{title}</h1>
            {children}
        </header>
    );
}
