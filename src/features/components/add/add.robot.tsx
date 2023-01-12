import { SyntheticEvent, useState } from 'react';
import { RobotClass, robotType } from '../../../core/types/robot.type';

export function Add({ handleAdd }: { handleAdd: (robot: robotType) => void }) {
    const initialFormData: Partial<robotType> = {
        name: ' ',
        speed: 0,
        stamina: 0,
        user: ' ',
        imagen: ' ',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleAdd(
            new RobotClass(
                formData.name as string,
                formData.speed as number,
                formData.stamina as number,
                formData.user as string
            )
        );
        setFormData(initialFormData);
    };

    return (
        <>
            <form className="robotPage" onSubmit={handleSubmit}>
                <div>
                    <div className="section">
                        <label htmlFor="robotName" className="sectionLabel">
                            Robot name
                        </label>
                        <input
                            className="TextBox"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name of your robot"
                            value={formData.name}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="section">
                        <label htmlFor="robotSpeed" className="sectionLabel">
                            Speed
                        </label>
                        <input
                            className="TextBox"
                            type="number"
                            min="0"
                            max="10"
                            name="speed"
                            id="speed"
                            value={formData.speed}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="section">
                        <label htmlFor="robotStamina" className="sectionLabel">
                            Stamina
                        </label>
                        <input
                            className="TextBox"
                            type="number"
                            min="0"
                            max="10"
                            name="stamina"
                            id="stamina"
                            placeholder="Stamina"
                            value={formData.stamina}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="section">
                        <label htmlFor="robotUser" className="sectionLabel">
                            Robot creator
                        </label>
                        <input
                            className="TextBox"
                            type="text"
                            name="user"
                            id="user"
                            placeholder="Creator name"
                            value={formData.user}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="addButton_container">
                        <button type="submit" className="addButton">
                            Añadir
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
