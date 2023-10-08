import { render, screen } from '@testing-library/react';
import App from './App';

test('should render App', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: 'Welcome to React + TypeScript + Vite template',
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: 'Get started!' })
  ).toBeInTheDocument();
});
