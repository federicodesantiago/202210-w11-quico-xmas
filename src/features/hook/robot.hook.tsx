import { useCallback, useMemo, useState } from 'react';
import { robotType } from '../../core/types/robot.type';
import { RobotRepo } from '../../repository/robotRepo';

export function useRobot() {
    const repo = useMemo(() => new RobotRepo(), []);

    const initialState: Array<robotType> = [];

    const [robots, setRobots] = useState(initialState);

    const handleLoad = useCallback(async () => {
        const robotList = await repo.load();
        setRobots(robotList);
    }, [repo]);

    const handleAdd = async function (robot: robotType) {
        const newRobot = await repo.create(robot);
        setRobots([...robots, newRobot]);
    };

    const handleUpdate = async function (robot: Partial<robotType>) {
        setRobots(
            robots.map((item) =>
                item.id === robot.id ? { ...item, ...robot } : item
            )
        );
        await repo.update(robot);
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

    return {
        robots,
        handleLoad,
        handleAdd,
        handleUpdate,
        handleDelete,
        handleFavourite,
    };
}
