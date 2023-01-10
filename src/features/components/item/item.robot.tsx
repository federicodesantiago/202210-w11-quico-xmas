import { robotType } from '../../../core/types/robot.type';
import trash from '../../../assets/trash.webp';
import addFav from '../../../assets/addFav.webp';
import remFav from '../../../assets/removeFav.webp';
import './item.robot.css';

export function Item({
    item,
    handleDelete,
    handleFavourite,
}: {
    item: robotType;
    handleDelete: (id: robotType['id']) => void;
    handleFavourite: (robot: Partial<robotType>) => void;
}) {
    const handleClick = () => {
        handleDelete(item.id);
    };

    const handleClickFav = () => {
        handleFavourite(item);
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
                            <p>Name: {item.name}</p>
                        </li>
                        <li>
                            <p>Speed: {item.speed}</p>
                        </li>
                        <li>
                            <p>Stamina: {item.stamina}</p>
                        </li>
                        <li>
                            <p>User: {item.user}</p>
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
                                    <img src={trash} alt="button Delete" />
                                </button>
                            </li>
                            <li>
                                <button
                                    type="submit"
                                    className="item-task__end button"
                                    onClick={handleClickFav}
                                >
                                    {item.favourite ? (
                                        <img src={remFav} alt="button Remove" />
                                    ) : (
                                        <img src={addFav} alt="button Add" />
                                    )}
                                </button>
                            </li>
                        </span>
                    </ul>
                </div>
            </div>
        </>
    );
}
