import React from 'react';
import styles from './LoadButton.module.scss';

interface LoadButtonProps {
  buttonName: string;
  onClick: ()  => void;
}
const LoadButton: React.FC<LoadButtonProps> = ({ buttonName, onClick }) => {
  return (
    <div className={styles.buttonContainer}>
    <button className={styles.loadButton} onClick={onClick}>
      <span className={styles.buttonText}>{buttonName}</span>
    </button>
    /</div>
  );
};

export default LoadButton;