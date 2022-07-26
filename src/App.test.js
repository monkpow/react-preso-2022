import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('Displays greeting', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders in dark-mode by default', () => {
  render(<App />);
  const element = screen.getByTestId('main-body-styles')
  expect(element).toHaveClass('dark-mode');
});

test('Clicking the darkMode checkbox toggles darkMode', () => {
  render(<App />);
  const element = screen.getByTestId('main-body-styles')
  expect(element).not.toHaveClass('jitter');
  fireEvent.click(screen.getByText('Too much coffee'))
  expect(element).toHaveClass('jitter');
});


