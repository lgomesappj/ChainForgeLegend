// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainForgeLegend title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainForgeLegend/i);
    expect(titleElement).toBeInTheDocument();
});
