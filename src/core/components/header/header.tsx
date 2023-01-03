import { Link } from 'react-router-dom';
import './header.css';

export function Header() {
    const title = 'RoboApp';

    return (
        <header className="title" aria-label="title">
            <div className="title_container">
                <h1>{title}</h1>
            </div>
            <nav>
                <ul>
                    <li className="list_header">
                        <Link to={'/HomePage'}>
                            <button className="list_header-button">Home</button>
                        </Link>
                    </li>
                    <li className="list_header">
                        <Link to={'/robotsPage'}>
                            <button className="list_header-button">
                                Robots
                            </button>
                        </Link>
                    </li>
                    <li className="list_header">
                        <Link to={'/robotsFav'}>
                            <button className="list_header-button">
                                Favourites
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
