import { useEffect, useState } from 'react';
import { robotType } from '../../core/types/robot.type';
import { RobotRepo } from '../../repository/robotRepo';
import { getRobots, saveRobots } from '../components/data/mock.service';
import { Item } from '../components/item/item.robot';
import './favourite.page.css';
export default function Robots() {
    const repoFav = new RobotRepo();
    const initialState: Array<robotType> = [];

    const [robots, setRobots] = useState(initialState);

    const handleLoad = async () => {
        const dataFav = await getRobots();
        setRobots(dataFav);
    };

    const handleUpdate = function (robot: Partial<robotType>) {
        setRobots(
            robots.map((item) =>
                item.id === robot.id ? { ...item, ...robotFav } : item
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
                item.id === robot.id ? { ...item, ...robotFav } : item
            )
        );
        await repoFav.update(robot);
    };

    useEffect(() => {
        handleLoad();
    }, []);

    useEffect(() => {
        if (robots.length) {
            saveRobots(robots);
        }
    }, [robots]);

    const robotFav = robots.filter((item) => item.favourite);

    return (
        <>
            <ul className="robot-list">
                {robotFav.map((item) => {
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
