import './Button.css';

export interface ButtonProps {
  /**
   * Button content.
   */
  children: React.ReactNode;
  /**
   * Whether the button is disabled.
   */
  disabled?: boolean;
  /**
   * Optional click handler.
   */
  onClick?: () => void;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button variant.
   */
  variant?: 'primary' | 'secondary';
}

/**
 * Primary UI component for user interaction
 */
export default function Button({
  children,
  disabled,
  size = 'medium',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        'button',
        `button--${variant}`,
        `button--${size}`,
        ...(disabled ? ['button--disabled'] : []),
      ].join(' ')}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
