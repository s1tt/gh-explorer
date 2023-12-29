import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean;
}

const Button = ({ children, onClick, isDisabled }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
