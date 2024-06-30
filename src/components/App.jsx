import React, { useState } from 'react';
import styles from './App.module.css';
import SwipeModal from './Swipe/swipeModal';

// Importing images
import image1 from '../components/devPhoto/images/image-1.png';
import image2 from '../components/devPhoto/images/image-2.jpeg';
import image3 from '../components/devPhoto/images/image-3.jpeg';
import image4 from '../components/devPhoto/images/image-4.png';
import image5 from '../components/devPhoto/images/image-5.png';
import image6 from '../components/devPhoto/images/image-6.jpeg';
import image7 from '../components/devPhoto/images/image-7.png';
import image8 from '../components/devPhoto/images/image-8.png';

const teamMembers = [
  {
    id: 1,
    name: 'Member 1',
    role: 'Team-Leader',
    imgSrc: image1,
  },
  {
    id: 2,
    name: 'Member 2',
    role: 'Scrum-master',
    imgSrc: image2,
  },
  {
    id: 3,
    name: 'Member 3',
    role: 'Scrum-master',
    imgSrc: image3,
  },
  {
    id: 4,
    name: 'Member 4',
    role: 'Scrum-master',
    imgSrc: image4,
  },
  {
    id: 5,
    name: 'Member 5',
    role: 'Scrum-master',
    imgSrc: image5,
  },
  {
    id: 6,
    name: 'Member 6',
    role: 'Scrum-master',
    imgSrc: image6,
  },
  {
    id: 7,
    name: 'Member 7',
    role: 'Scrum-master',
    imgSrc: image7,
  },
  {
    id: 8,
    name: 'Member 8',
    role: 'Scrum-master',
    imgSrc: image8,
  },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.App}>
      {/* Other content of your webpage */}
      <footer className={styles.footer}>
        <p>
          Developed with <span className={styles.heart}>&hearts;</span> by the{' '}
          <span className={styles.teamName} onClick={handleModalOpen}>
            Team-DevBenders @ 2024
          </span>{' '}
          | All Rights Reserved
        </p>
      </footer>
      {isModalOpen && (
        <SwipeModal onClose={handleModalClose} teamMembers={teamMembers} />
      )}
    </div>
  );
}

export { App };
