import React, { useEffect } from 'react';
import { saveRobots } from '../../../features/components/data/mock.service';
import { useRobot } from '../../../features/hook/robot.hook';
import { Layout } from '../layout/layout';
import './App.css';

export function App() {
    const {
        robots,
        handleLoad,
        handleAdd,
        handleDelete,
        handleUpdate,
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
            robots={robots}
            handleAdd={handleAdd}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            handleFavourite={handleFavourite}
        ></Layout>
    );
}
