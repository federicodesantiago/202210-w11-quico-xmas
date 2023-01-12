import React, { useEffect } from 'react';
import { saveRobots } from '../../../features/components/data/mock.service';
import { useRobot } from '../../../features/hook/robot.hook';
import { MenuItems } from '../../types/menu.items';
import { Layout } from '../layout/layout';
import './App.css';

export function App() {
    const items: MenuItems = [
        { path: '/HomePage', label: 'Inicio' },
        { path: 'robotsPage', label: 'RobotPage' },
        { path: 'robotsFav', label: 'Favoritos' },
        { path: 'detailsPage', label: 'Detalles' },
    ];

    const {
        robots,
        handleLoad,
        handleAdd,
        handleUpdate,
        handleDelete,
        handleFavourite,
    } = useRobot();

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    useEffect(() => {
        if (robots.length) {
            saveRobots(robots);
        }
    }, [robots]);

    return (
        <Layout
            items={items}
            robots={robots}
            handleAdd={handleAdd}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            handleFavourite={handleFavourite}
        ></Layout>
    );
}
