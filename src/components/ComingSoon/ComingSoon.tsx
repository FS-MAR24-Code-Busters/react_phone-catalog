/* ComingSoon.tsx */
import React from 'react';
import styles from './ComingSoon.module.css';
import comingSoonImg from '../../assets/coming-soon.png';

type Props = {
  onClose: (value: boolean) => void;
};

export const ComingSoon: React.FC<Props> = ({ onClose }) => {
  return (
    <div className={styles.ComingSoon}>
      <div className={styles.ComingSoon__modal}>
        <button
          type="button"
          className={styles.ComingSoon__modal_button}
          onClick={() => onClose(false)}
        >
          <div className="icon icon--remove" />
        </button>
        <img
          src={comingSoonImg}
          className={styles.ComingSoon__modal_image}
          alt="Coming Soon"
        />
        <p className={styles.ComingSoon__modal_message}>
          Sorry, this feature has not been implemented yet!
        </p>
      </div>
    </div>
  );
};
