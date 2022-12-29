import { Link } from 'react-router-dom';
import robotImg from '../../assets/main_robot.webp';
import './home.page.css';

export default function HomePage() {
    return (
        <div className="homePage">
            <div>
                <Link to={'/robotsPage'}>
                    <img src={robotImg} alt="Super Robot" />
                </Link>
                <div className="robotCounter">
                    <p>Tienes X robots disponibles</p>
                </div>
            </div>
        </div>
    );
}
