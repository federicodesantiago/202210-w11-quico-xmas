import { robotType } from '../../../core/types/robot.type';
import { Add } from '../add/add.robot';
import { Item } from '../item/item.robot';

import './list.robot.css';
export function List({
    robots,
    handleAdd,
    handleDelete,
    handleFavourite,
}: {
    robots: Array<robotType>;
    handleAdd: (robot: robotType) => void;
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
