import React, { useState } from 'react';
import styles from './App.module.css';
import footerModal from '../modal/footerModal.js'; // Ensure this path is correct

// import { ReactComponent as InstagramIcon } from '../icons/icons.instagram.svg';
// import { ReactComponent as FacebookIcon } from '../icons/icons.facebook.svg';
// import { ReactComponent as YouTubeIcon } from '../icons/icons.youtube.svg';
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

const teamMembers = [
  { id: 1, name: 'Bill Mico Malazarte', role: 'Team-Leader', imgSrc: image1 },
  { id: 2, name: 'Alexander Dinoy Jr.', role: 'Scrum-master', imgSrc: image2 },
  { id: 3, name: 'Cyfred Odarve', role: 'BackEnd Developer', imgSrc: image3 },
  {
    id: 4,
    name: 'Crisanto Pedroso',
    role: 'FrontEnd Developer',
    imgSrc: image4,
  },
  {
    id: 5,
    name: 'Franci Reyes Giordani',
    role: 'FrontEnd Developer',
    imgSrc: image5,
  },
  {
    id: 6,
    name: 'Judielyn Pagente',
    role: 'FrontEnd Developer',
    imgSrc: image6,
  },
  { id: 7, name: 'Jovelyn Molos', role: 'FrontEnd Developer', imgSrc: image7 },
  {
    id: 8,
    name: 'Jed Alston Fallorina',
    role: 'BackEnd Developer',
    imgSrc: image8,
  },
  { id: 9, name: 'Percival Aceron', role: 'BackEnd Developer', imgSrc: image9 },
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
        <p className={styles.follow}>FOLLOW US</p>
        <div className={styles.socialIcons}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={styles.icon} viewBox="0 0 24 24">
              
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={styles.icon} viewBox="0 0 24 24">
              
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={styles.icon} viewBox="0 0 24 24">
              
            </svg>
          </a>

          <span className={styles.install}>INSTALL HERE</span>
          <div className={styles.socialIcons}>
            <a href="app-store" target="_blank" rel="noopener noreferrer">
              <svg className={styles.icon} viewBox="0 0 24 24">
               
              </svg>
            </a>
            <a href="google-play" target="_blank" rel="noopener noreferrer">
              <svg className={styles.icon} viewBox="0 0 24 24">

              </svg>
            </a>
          </div>
        </div>

        <p>
          Developed with <span className={styles.heart}>&hearts;</span> by the{' '}
          <span className={styles.teamName} onClick={handleModalOpen}>
            Team-DevBenders @ 2024
          </span>{' '}
          | All Rights Reserved
        </p>
      </footer>
      {isModalOpen && (
        <footerModal onClose={handleModalClose} teamMembers={teamMembers} />
      )}
    </div>
  );
}

export { footerModal };
