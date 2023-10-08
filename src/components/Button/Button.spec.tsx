import { render, screen } from '@testing-library/react';
import Button from './Button';

test('should render Button', () => {
  render(<Button>Press me</Button>);

  const button = screen.getByRole('button', {
    name: 'Press me',
  });
  expect(button).toHaveClass('button');
});
