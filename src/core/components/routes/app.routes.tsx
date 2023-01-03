import { Route, Routes } from 'react-router-dom';
import RobotsFav from '../../../features/favourite/favourite.page';
import HomePage from '../../../features/home/home.page';
import RobotsPage from '../../../features/robotPage/robots.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path={'/HomePage'} element={<HomePage></HomePage>}></Route>
            <Route
                path={'robotsPage'}
                element={<RobotsPage></RobotsPage>}
            ></Route>
            <Route path={'robotsFav'} element={<RobotsFav></RobotsFav>}></Route>
            <Route path={'*'} element={<HomePage></HomePage>}></Route>
        </Routes>
    );
}
