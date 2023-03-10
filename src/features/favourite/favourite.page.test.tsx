/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from '@testing-library/react';
import { RobotClass } from '../../core/types/robot.type';
import RobotsFav from './favourite.page';
import { getRobots } from '../components/data/mock.service';

jest.mock('../components/data/mock.service');

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

    const mockRobots = [mockRobot];
    mockRobots[0].favourite = true;

    beforeEach(() => {
        (getRobots as jest.Mock).mockResolvedValue(mockRobots);
    });

    beforeEach(async () => {
        await act(async () => {
            render(
                <RobotsFav
                    robots={mockRobots}
                    handleUpdate={mockFavourite}
                    handleDelete={mockDelete}
                    handleFavourite={mockFavourite}
                ></RobotsFav>
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
