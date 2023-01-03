import { useEffect, useState } from 'react';
import { robotType } from '../../../core/types/robot.type';
import { RobotRepo } from '../../../repository/robotRepo';
import { Add } from '../add/add.robot';
import { getRobots, saveRobots } from '../data/mock.service';
import { Item } from '../item/item.robot';
import './list.robot.css';
export function List() {
    const repo = new RobotRepo();
    const initialState: Array<robotType> = [];

    const [robots, setRobots] = useState(initialState);

    const handleLoad = async () => {
        const data = await getRobots();
        setRobots(data);
    };

    const handleAdd = function (robot: robotType) {
        setRobots([...robots, robot]);
    };

    const handleUpdate = function (robot: Partial<robotType>) {
        setRobots(
            robots.map((item) =>
                item.id === robot.id ? { ...item, ...robots } : item
            )
        );
    };

    const handleDelete = function (id: robotType['id']) {
        setRobots(robots.filter((item) => item.id !== id));
    };

    const handleFavourite = async function (robot: Partial<robotType>) {
        robot.favourite = !robot.favourite;
        setRobots(
            robots.map((item) =>
                item.id === robot.id ? { ...item, ...robot } : item
            )
        );
        await repo.update(robot);
    };

    useEffect(() => {
        handleLoad();
    }, []);

    useEffect(() => {
        if (robots.length) {
            saveRobots(robots);
        }
    }, [robots]);

    return (
        <>
            <Add handleAdd={handleAdd}></Add>
            <ul className="robot-list">
                {robots.map((item) => {
                    return (
                        <li key={item.id}>
                            <Item
                                item={item}
                                handleUpdate={handleUpdate}
                                handleDelete={handleDelete}
                                handleFavourite={handleFavourite}
                            ></Item>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
