import { robotType } from './robot.type';

export type RobotHookType = {
    robots: Array<robotType>;
    handleLoad: () => void;
    handleAdd: (item: robotType) => void;
    handleUpdate: (robot: Partial<robotType>) => void;
    handleDelete: (id: robotType['id']) => void;
    handleFavourite: (robot: Partial<robotType>) => void;
};
