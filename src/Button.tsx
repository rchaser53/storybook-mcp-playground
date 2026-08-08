import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Visual emphasis of the button. */
  variant?: 'primary' | 'secondary';
  /** Content displayed inside the button. */
  children: ReactNode;
};

export function Button({ variant = 'primary', children, style, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      style={{
        border: 0,
        borderRadius: 8,
        cursor: 'pointer',
        font: 'inherit',
        fontWeight: 600,
        padding: '10px 16px',
        background: variant === 'primary' ? '#2563eb' : '#e5e7eb',
        color: variant === 'primary' ? '#fff' : '#111827',
        ...style,
      }}
    >
      {children}
    </button>
  );
}
