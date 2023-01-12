/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act } from '@testing-library/react';
import { RobotClass } from '../../../core/types/robot.type';
import { getRobots } from '../data/mock.service';
import { List } from './list.robot';

jest.mock('../data/mock.service');

describe('Given "List" component', () => {
    const mockAdd = jest.fn();
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
    const mockRobots = [mockRobot];

    beforeEach(() => {
        (getRobots as jest.Mock).mockResolvedValue(mockRobots);
    });
    beforeEach(async () => {
        await act(async () => {
            render(
                <List
                    robots={mockRobots}
                    handleAdd={mockAdd}
                    handleUpdate={mockFavourite}
                    handleDelete={mockDelete}
                    handleFavourite={mockFavourite}
                ></List>
            );
        });
    });

    test(`Then it should be render the data`, async () => {
        const elementName = screen.getByText(`Name: ${mockName}`);
        expect(elementName).toBeInTheDocument();
        const elementSpeed = screen.getByText(`Speed: ${mockSpeed}`);
        expect(elementSpeed).toBeInTheDocument();
        const elementStamina = screen.getByText(`Stamina: ${mockStamina}`);
        expect(elementStamina).toBeInTheDocument();
        const elementUser = screen.getByText(`User: ${mockUser}`);
        expect(elementUser).toBeInTheDocument();
    });
});
