import React, { useState } from 'react';
import styles from './App.module.css';
import SwipeModal from './Swipe/swipeModal'; // Ensure this path is correct

// Importing images
import image1 from '../components/devPhoto/images/image-1.png';
import image2 from '../components/devPhoto/images/image-2.jpeg';
import image3 from '../components/devPhoto/images/image-3.jpeg';
import image4 from '../components/devPhoto/images/image-4.png';
import image5 from '../components/devPhoto/images/image-5.png';
import image6 from '../components/devPhoto/images/image-6.jpeg';
import image7 from '../components/devPhoto/images/image-7.jpeg';
import image8 from '../components/devPhoto/images/image-8.png';
import image9 from '../components/devPhoto/images/image-9.png';
import image10 from '../components/devPhoto/images/image-10.png';

const teamMembers = [
  {
    id: 1,
    name: 'Bill Mico Malazarte',
    role: 'Team-Leader',
    imgSrc: image1,
  },
  {
    id: 2,
    name: 'Alexander Dinoy Jr.',
    role: 'Scrum-master',
    imgSrc: image2,
  },
  {
    id: 3,
    name: 'Cyfred Odarve',
    role: 'Scrum-master',
    imgSrc: image3,
  },
  {
    id: 4,
    name: 'Crisanto Pedroso',
    role: 'Scrum-master',
    imgSrc: image4,
  },
  {
    id: 5,
    name: 'Franci Reyes Giordani',
    role: 'Scrum-master',
    imgSrc: image5,
  },
  {
    id: 6,
    name: 'Judielyn Pagente',
    role: 'Scrum-master',
    imgSrc: image6,
  },
  {
    id: 7,
    name: 'Jovelyn Molos',
    role: 'Scrum-master',
    imgSrc: image7,
  },
  {
    id: 8,
    name: 'Jed Alston Fallorina',
    role: 'Scrum-master',
    imgSrc: image8,
  },
  {
    id: 9,
    name: 'Jan Dilbert Ampuan',
    role: 'Scrum-master',
    imgSrc: image9,
  },
  {
    id: 10,
    name: 'Percival Aceron',
    role: 'Scrum-master',
    imgSrc: image10,
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
