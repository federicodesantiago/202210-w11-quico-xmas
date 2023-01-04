import { Route, Routes } from 'react-router-dom';
import RobotsFav from '../../../features/favourite/favourite.page';
import HomePage from '../../../features/home/home.page';
import RobotsPage from '../../../features/robotPage/robots.page';
import { robotType } from '../../types/robot.type';

export function AppRoutes({
    robots,
    handleAdd,
    handleDelete,
    handleUpdate,
    handleFavourite,
}: {
    robots: Array<robotType>;
    handleAdd: (robot: robotType) => void;
    handleUpdate: (task: Partial<robotType>) => void;
    handleDelete: (id: robotType['id']) => void;
    handleFavourite: (robot: Partial<robotType>) => void;
}) {
    return (
        <Routes>
            <Route
                path={'/HomePage'}
                element={<HomePage robots={robots}></HomePage>}
            ></Route>
            <Route
                path={'robotsPage'}
                element={
                    <RobotsPage
                        robots={robots}
                        handleAdd={handleAdd}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                        handleFavourite={handleFavourite}
                    ></RobotsPage>
                }
            ></Route>
            <Route
                path={'robotsFav'}
                element={
                    <RobotsFav
                        robots={robots}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                        handleFavourite={handleFavourite}
                    ></RobotsFav>
                }
            ></Route>
            <Route
                path={'*'}
                element={<HomePage robots={robots}></HomePage>}
            ></Route>
        </Routes>
    );
}
