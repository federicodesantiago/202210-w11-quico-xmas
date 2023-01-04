import { Link } from 'react-router-dom';
import robotImg from '../../assets/main_robot.webp';
import { robotType } from '../../core/types/robot.type';
import './home.page.css';

export default function HomePage({ robots }: { robots: Array<robotType> }) {
    return (
        <div className="homePage">
            <div>
                <Link to={'/robotsPage'}>
                    <img src={robotImg} alt="Super Robot" />
                </Link>
                <div className="robotCounter">
                    <p>Tienes {robots.length} robots disponibles</p>
                </div>
            </div>
        </div>
    );
}
