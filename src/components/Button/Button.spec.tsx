import { render } from '@testing-library/react';
import Button, { type ButtonProps } from './Button';

function setup(props: Omit<ButtonProps, 'children'> = {}) {
  const utils = render(<Button {...props}>Press me</Button>);

  const button = utils.getByRole('button', {
    name: 'Press me',
  });

  return {
    ...utils,
    button,
  };
}

test('should render Button with default props', () => {
  const { button } = setup();
  expect(button).toHaveClass('button');
  expect(button).toHaveAttribute('type', 'button');
});

test.each(['small', 'medium', 'large'] as const)(
  'should render Button with "%s" size',
  (size) => {
    const { button } = setup({ size });
    expect(button).toHaveClass(`button--${size}`);
  }
);

test.each(['primary', 'secondary'] as const)(
  'should render Button with "%s" variant',
  (variant) => {
    const { button } = setup({ variant });
    expect(button).toHaveClass(`button--${variant}`);
  }
);

test('should render Button disabled', () => {
  const { button } = setup({ disabled: true });
  expect(button).toHaveClass('button--disabled');
});
