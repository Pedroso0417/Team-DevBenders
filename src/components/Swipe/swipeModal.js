import React from 'react';
import css from './swipeModal.module.css';

const swipeModal = ({ onClose, teamMembers }) => {
  return (
    <div className={css.modal}>
      <div className={css.modalContent}>
        <span className={css.close} onClick={onClose}>
          &times;
        </span>
        <h2>Team Members</h2>
        {teamMembers.map(member => (
          <div key={member.id} className={css.teamMember}>
            <img src={member.imgSrc} alt={member.name} />
            <div className={css.memberInfo}>
              <h3>{member.name}</h3>
              <p>Role: {member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default swipeModal;
