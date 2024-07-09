import React from 'react';
import styles from './swipeModal.module.css';

function SwipeModal({ onClose, teamMembers }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
        <div className={styles.gridContainer}>
          {teamMembers.map(member => (
            <div key={member.id} className={styles.gridItem}>
              <img src={member.imgSrc} alt={member.name} />
              <p className={styles.memberName}>{member.name}</p>
              <p className={styles.membeName}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SwipeModal;
