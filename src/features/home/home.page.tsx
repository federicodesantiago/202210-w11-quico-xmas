import { Link } from 'react-router-dom';
import robotImg from '../../assets/main_robot.webp';
import './home.page.css';

export default function HomePage() {
    // const lenObj = JSON.parse(localStorage.getItem('robots'));
    // let count = 0;
    // for (let item in lenObj) {
    //     count += lenObj[item].length;
    // }
    // let cartLength: number | null = 0
    //  cartLength = Object.values(
    //     JSON.parse(localStorage.getItem('robots'))
    // ).flat().length;

    // const cartLength = localStorage.getItem('robots');
    // const movida =  JSON.parse(cartLength)

    return (
        <div className="homePage">
            <div>
                <Link to={'/robotsPage'}>
                    <img src={robotImg} alt="Super Robot" />
                </Link>
                <div className="robotCounter">
                    <p>Tienes robots disponibles</p>
                </div>
            </div>
        </div>
    );
}
