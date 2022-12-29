import './robots.page.css';
import { Link } from 'react-router-dom';

export default function RobotsPage() {
    return (
        <>
            <div className="robotPage">
                <p>Página de robots</p>
                <div>
                    <Link to={'/HomePage'}>
                        <button>Home Page</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
