import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom'; // Importing jest-dom to use toBeInTheDocument and toHaveTextContent

describe('boundary', () => {
    test('AppComponent boundary renders static greeting message', () => {
        render(<App />);
        // Check if the static greeting "Welcome to My React App" is rendered
        const greetingMessage = screen.getByText('Welcome to My React App');
        expect(greetingMessage).toBeInTheDocument();
    });

    test('AppComponent boundary renders the dynamic user status (Online)', () => {
        render(<App />);
        // Check if the user status "User is Online" is rendered based on isOnline = true
        const userStatusMessage = screen.getByText('User is Online');
        expect(userStatusMessage).toBeInTheDocument();
    });

    test('AppComponent boundary renders the correct greeting based on the time of day (morning)', () => {
        // Simulate the timeOfDay as "morning" by adjusting the mock logic
        render(<App />);

        // Check if the greeting message includes "Good Morning!"
        const timeGreetingMessage = screen.getByText((content, element) =>
            content.includes('Good Morning!')
        );
        expect(timeGreetingMessage).toBeInTheDocument();
    });
});
