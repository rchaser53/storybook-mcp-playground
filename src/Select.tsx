import type { ReactNode, SelectHTMLAttributes } from 'react';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  /** Visual emphasis of the select list. */
  variant?: 'primary' | 'secondary';
  /** Options displayed inside the select list. */
  children: ReactNode;
};

export function Select({ variant = 'primary', children, style, ...props }: SelectProps) {
  return (
    <select
      {...props}
      style={{
        border: variant === 'primary' ? 0 : '1px solid #d1d5db',
        borderRadius: 8,
        cursor: 'pointer',
        font: 'inherit',
        fontWeight: 600,
        padding: '10px 36px 10px 16px',
        background: variant === 'primary' ? '#2563eb' : '#e5e7eb',
        color: variant === 'primary' ? '#fff' : '#111827',
        ...style,
      }}
    >
      {children}
    </select>
  );
}
