import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

describe('Given App component', () => {
    describe('When it has been render', () => {
        test('Then its child components should be render also with its title', () => {
            render(
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            );
            const elementHeader = screen.getByRole('heading');
            expect(elementHeader).toBeInTheDocument();
        });
    });
});
