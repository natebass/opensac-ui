import React from 'react';

import './button.css';

export interface ButtonProps {
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** What background color to use */
  type?: 'gold' | 'blue' | 'alt-light' | 'alt-gold' | 'alt-blue';
  /** Optional click handler */
  onClick?: () => void;
  /** Button contents */
  children;
}

/** Main themed button */
export const Button = ({
  type = 'gold',
  size = 'medium',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`button button-regular button-${type}`}
      {...props}
    >
      a
      {children}
    </button>
  );
};
