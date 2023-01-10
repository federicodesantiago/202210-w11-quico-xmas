import { render, screen } from '@testing-library/react';
import { RobotClass } from '../../../core/types/robot.type';
import { Item } from './item.robot';
import userEvent from '@testing-library/user-event';

describe('Given robot component', () => {
    const mockDelete = jest.fn();
    const mockFavourite = jest.fn();

    const mockName = 'Cortocircuito';
    const mockSpeed = 5;
    const mockStamina = 7;
    const mockUser = 'Pepe';

    const mockRobot = new RobotClass(
        mockName,
        mockSpeed,
        mockStamina,
        mockUser
    );
    describe('When data are provided in the component', () => {
        test('The user could interact with them', async () => {
            render(
                <Item
                    item={mockRobot}
                    handleDelete={mockDelete}
                    handleFavourite={mockFavourite}
                ></Item>
            );

            const elements = [
                screen.getByAltText('Robot pic'),
                screen.getByText(`Name: ${mockName}`),
                screen.getByText(`Speed: ${mockSpeed}`),
                screen.getByText(`Stamina: ${mockStamina}`),
                screen.getByText(`User: ${mockUser}`),
                ...screen.getAllByRole('button'),
            ];
            expect(elements[0]).toHaveAttribute(
                'src',
                `https://robohash.org/${mockRobot.id}.png`
            );
            expect(elements[1]).toBeInTheDocument();
            expect(elements[2]).toBeInTheDocument();
            expect(elements[3]).toBeInTheDocument();
            expect(elements[4]).toBeInTheDocument();

            userEvent.click(elements[5]);
            expect(mockDelete).toHaveBeenCalledTimes(1);
            userEvent.click(elements[6]);
            expect(mockFavourite).toHaveBeenCalledTimes(1);
        });
    });
});
