import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  args: {
    children: 'Button',
    size: 'medium',
    variant: 'primary',
  },
  argTypes: {
    children: { control: 'text' },
    onClick: { table: { disable: true } },
    size: { control: 'inline-radio' },
    variant: { control: 'inline-radio' },
  },
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      alignItems: 'center',
      display: 'flex',
      gap: '2rem',
      justifyItems: 'center',
    }}
  >
    {children}
  </div>
);

export const Variants: Story = {
  render: (props) => (
    <Wrapper>
      <Button {...props} variant="primary" />
      <Button {...props} variant="secondary" />
    </Wrapper>
  ),
};

export const Sizes: Story = {
  render: (props) => (
    <Wrapper>
      <Button {...props} size="small" />
      <Button {...props} size="medium" />
      <Button {...props} size="large" />
    </Wrapper>
  ),
};

export const Disabled: Story = {
  render: (props) => (
    <Wrapper>
      <Button {...props} disabled variant="primary" />
      <Button {...props} disabled variant="secondary" />
    </Wrapper>
  ),
};

export default meta;
