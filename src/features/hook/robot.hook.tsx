import { useCallback, useMemo, useState } from 'react';
import { robotType } from '../../core/types/robot.type';
import { RobotRepo } from '../../repository/robotRepo';
import { getRobots } from '../components/data/mock.service';

export function useRobot() {
    const repo = useMemo(() => new RobotRepo(), []);

    const initialState: Array<robotType> = [];

    const [robots, setRobots] = useState(initialState);

    const handleLoad = useCallback(async () => {
        const data = await getRobots();
        setRobots(data);
    }, []);

    const handleAdd = async function (robot: robotType) {
        setRobots([...robots, robot]);
    };

    const handleUpdate = async function (robot: Partial<robotType>) {
        setRobots(
            robots.map((item) =>
                item.id === robot.id ? { ...item, ...robots } : item
            )
        );
    };

    const handleDelete = async function (id: robotType['id']) {
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

    // useEffect(() => {
    //     handleLoad();
    // }, []);

    // useEffect(() => {
    //     if (robots.length) {
    //         saveRobots(robots);
    //     }
    // }, [robots]);

    return {
        robots,
        handleLoad,
        handleAdd,
        handleUpdate,
        handleDelete,
        handleFavourite,
    };
}
