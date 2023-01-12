import { robotType } from '../../../core/types/robot.type';
import trash from '../../../assets/trash.webp';
import addFav from '../../../assets/addFav.webp';
import remFav from '../../../assets/removeFav.webp';
import detailsPic from '../../../assets/details.webp';
import detailsSelected from '../../../assets/detailsSelected.webp';
import './item.robot.css';
import { SyntheticEvent, useState } from 'react';
// import { useState } from 'react';

export function Item({
    item,
    handleUpdate,
    handleDelete,
    handleFavourite,
}: {
    item: robotType;
    handleUpdate: (robot: Partial<robotType>) => void;
    handleDelete: (id: robotType['id']) => void;
    handleFavourite: (robot: Partial<robotType>) => void;
}) {
    const [updating, setUpdating] = useState(false);

    const [updateData, setUpdateData] = useState(item);

    const handleInput = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;
        setUpdateData({ ...updateData, [element.name]: element.value });
    };

    const handleClick = () => {
        handleDelete(item.id);
    };

    const handleClickFav = () => {
        handleFavourite(item);
    };

    const handleClickUp = () => {
        handleUpdate(updateData);
        setUpdating(!updating);
    };

    const originalData = () => {
        return (
            <>
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
                    </ul>
                </div>
            </>
        );
    };

    const updatedData = () => {
        return (
            <div>
                <div className="sectionUpdate">
                    <label htmlFor="robotName" className="sectionLabelUpdate">
                        Name:
                    </label>
                    <input
                        className="TextBoxUpdate"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name of your robot"
                        value={updateData.name}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div className="sectionUpdate">
                    <label htmlFor="robotSpeed" className="sectionLabelUpdate">
                        Speed:
                    </label>
                    <input
                        className="TextBoxUpdate TextBoxUpdateSpeed"
                        type="number"
                        min="0"
                        max="10"
                        name="speed"
                        id="speed"
                        value={updateData.speed}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div className="sectionUpdate">
                    <label
                        htmlFor="robotStamina"
                        className="sectionLabelUpdate"
                    >
                        Stamina:
                    </label>
                    <input
                        className="TextBoxUpdate TextBoxUpdateStamina"
                        type="number"
                        min="0"
                        max="10"
                        name="stamina"
                        id="stamina"
                        placeholder="Stamina"
                        value={updateData.stamina}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div className="sectionUpdate">
                    <label htmlFor="robotUser" className="sectionLabelUpdate">
                        User:
                    </label>
                    <input
                        className="TextBoxUpdate"
                        type="text"
                        name="user"
                        id="user"
                        placeholder="Creator name"
                        value={updateData.user}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <p>
                        Creation Date: <span>{item.creationDate}</span>
                    </p>
                </div>
            </div>
        );
    };

    return (
        <>
            <div>
                <div>
                    <img src={item.imagen} alt="Robot pic" />
                </div>
                <div className="robot__features">
                    {!updating && originalData()}
                    {updating && updatedData()}
                </div>
                <ul className="listButtons">
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
                    <li>
                        <button
                            type="submit"
                            className="item-task__end button"
                            onClick={handleClickUp}
                        >
                            {updating ? (
                                <img
                                    src={detailsSelected}
                                    alt="button close details"
                                />
                            ) : (
                                <img
                                    src={detailsPic}
                                    alt="button open details"
                                />
                            )}
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}
