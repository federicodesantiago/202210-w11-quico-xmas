import { Link } from 'react-router-dom';
import { MenuItems } from '../../types/menu.items';

export function Menu({ items }: { items: MenuItems }) {
    return (
        <nav>
            <ul>
                <li className="list_header">
                    <Link to={'/HomePage'}>
                        <button className="list_header-button">Home</button>
                    </Link>
                </li>
                <li className="list_header">
                    <Link to={'/robotsPage'}>
                        <button className="list_header-button">Robots</button>
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
    );
}
