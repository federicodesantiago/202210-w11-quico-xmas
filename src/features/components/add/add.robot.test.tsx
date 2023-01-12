import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Add } from './add.robot';

describe('Given "Add" component', () => {
    const handleAdd = jest.fn();

    beforeEach(() => {
        render(<Add handleAdd={handleAdd}></Add>);
    });

    describe('When data are provided in the form', () => {
        const mockName = 'Cortocircuito';
        const mockSpeed = '5';
        const mockStamina = '7';
        const mockUser = 'Pepe';

        let inputElements: Array<HTMLElement>;
        let spinElements: Array<HTMLElement>;
        let elementButton: HTMLElement;
        beforeEach(() => {
            inputElements = screen.getAllByRole('textbox');
            spinElements = screen.getAllByRole('spinbutton');
            elementButton = screen.getByRole('button');
        });
        test('Then form could be used for type content', () => {
            expect(inputElements[0]).toBeInTheDocument();
            expect(inputElements[1]).toBeInTheDocument();
            expect(spinElements[0]).toBeInTheDocument();
            expect(spinElements[1]).toBeInTheDocument();
            userEvent.type(inputElements[0], mockName);
            userEvent.type(inputElements[1], mockUser);
            userEvent.type(spinElements[0], mockSpeed);
            userEvent.type(spinElements[1], mockStamina);
        });
        test('Then form could be used for send the function received in props', () => {
            userEvent.type(inputElements[0], mockName);
            userEvent.type(inputElements[1], mockUser);
            userEvent.type(spinElements[0], mockSpeed);
            userEvent.type(spinElements[1], mockStamina);
            userEvent.click(elementButton);
            expect(handleAdd).toHaveBeenCalled();
        });
    });
});
