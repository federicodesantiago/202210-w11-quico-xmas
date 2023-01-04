import { robotType } from '../../core/types/robot.type';
import { Item } from '../components/item/item.robot';
import './favourite.page.css';
export default function RobotsFav({
    robots,
    handleUpdate,
    handleDelete,
    handleFavourite,
}: {
    robots: Array<robotType>;
    handleUpdate: (task: Partial<robotType>) => void;
    handleDelete: (id: robotType['id']) => void;
    handleFavourite: (robot: Partial<robotType>) => void;
}) {
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
