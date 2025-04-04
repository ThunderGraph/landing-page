import React, { ButtonHTMLAttributes } from 'react';
import styles from './basicButton.module.css';

interface BasicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const BasicButton: React.FC<BasicButtonProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <button 
      className={`${styles.basicButton} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default BasicButton;
