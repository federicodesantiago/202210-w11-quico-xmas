import {
    getStorageList,
    setStorageList,
} from '../../../core/services/storage/storage';
import { RobotClass, robotType } from '../../../core/types/robot.type';
import { ROBOTS } from './mock.robots';

export const getRobots = async (): Promise<Array<robotType>> => {
    const data = getStorageList<RobotClass>('robots');
    if (!data.length) {
        setStorageList('robots', ROBOTS);
        return ROBOTS;
    }
    return data;
};

export const saveRobots = async (robots: Array<RobotClass>) => {
    setStorageList('robots', robots);
};
