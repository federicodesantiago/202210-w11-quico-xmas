import { robotType } from '../../../core/types/robot.type';
import { Add } from '../add/add.robot';
import { Item } from '../item/item.robot';

import './list.robot.css';
export function List({
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
