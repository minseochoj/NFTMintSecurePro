// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NFTMintSecurePro title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NFTMintSecurePro/i);
    expect(titleElement).toBeInTheDocument();
});
