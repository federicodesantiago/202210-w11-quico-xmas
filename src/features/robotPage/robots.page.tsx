import { robotType } from '../../core/types/robot.type';
import { List } from '../components/list/list.robot';
import './robots.page.css';

export default function RobotsPage({
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
        <>
            <List
                robots={robots}
                handleAdd={handleAdd}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                handleFavourite={handleFavourite}
            ></List>
        </>
    );
}
