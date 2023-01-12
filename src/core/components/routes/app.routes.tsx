import { Route, Routes } from 'react-router-dom';
import RobotsFav from '../../../features/favourite/favourite.page';
import HomePage from '../../../features/home/home.page';
import RobotsPage from '../../../features/robotPage/robots.page';
import { MenuItems } from '../../types/menu.items';
import { robotType } from '../../types/robot.type';

export function AppRoutes({
    items,
    robots,
    handleAdd,
    handleUpdate,
    handleDelete,
    handleFavourite,
}: {
    items: MenuItems;
    robots: Array<robotType>;
    handleAdd: (robot: robotType) => void;
    handleUpdate: (robot: Partial<robotType>) => void;
    handleDelete: (id: robotType['id']) => void;
    handleFavourite: (robot: Partial<robotType>) => void;
}) {
    return (
        <Routes>
            <Route
                path={items[0].path}
                element={<HomePage robots={robots}></HomePage>}
            ></Route>
            <Route
                path={items[1].path}
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
                path={items[2].path}
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
