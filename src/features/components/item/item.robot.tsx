import { robotType } from '../../../core/types/robot.type';
import trash from '../../../assets/trash.webp';
import addFav from '../../../assets/addFav.webp';
import './item.robot.css';

export function Item({
    item,
    handleUpdate,
    handleDelete,
}: {
    item: robotType;
    handleUpdate: (task: Partial<robotType>) => void;
    handleDelete: (id: robotType['id']) => void;
}) {
    // const handleChange = () => {
    //     handleUpdate(item);
    // };

    const handleClick = () => {
        handleDelete(item.id);
    };

    return (
        <>
            <div>
                <div>
                    <img src={item.imagen} alt="Robot pic" />
                </div>
                <div>
                    <ul className="itemData">
                        <li>
                            <p>
                                Name: <span>{item.name}</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                Speed: <span>{item.speed}</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                Stamina: <span>{item.stamina}</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                User: <span>{item.user}</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                Creation Date: <span>{item.creationDate}</span>
                            </p>
                        </li>
                        <span className="listButtons">
                            <li>
                                <button
                                    type="submit"
                                    className="item-task__end button"
                                    onClick={handleClick}
                                >
                                    <img src={trash} alt="buttonpng" />
                                </button>
                            </li>
                            <li>
                                <button
                                    type="submit"
                                    className="item-task__end button"
                                    onClick={handleClick}
                                >
                                    <img src={addFav} alt="buttonpng" />
                                </button>
                            </li>
                        </span>
                    </ul>
                </div>
            </div>
        </>
    );
}
