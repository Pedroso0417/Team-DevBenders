import React, { useState } from 'react';
import styles from './App.module.css';
import SwipeModal from './Swipe/swipeModal'; // Ensure this path is correct

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
  { id: 4, name: 'Crisanto Pedroso', role: 'FrontEnd Developer', imgSrc: image4 },
  { id: 5, name: 'Franci Reyes Giordani', role: 'FrontEnd Developer', imgSrc: image5 },
  { id: 6, name: 'Judielyn Pagente', role: 'FrontEnd Developer', imgSrc: image6 },
  { id: 7, name: 'Jovelyn Molos', role: 'FrontEnd Developer', imgSrc: image7 },
  { id: 8, name: 'Jed Alston Fallorina', role: 'BackEnd Developer', imgSrc: image8 },
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
        <div className={styles.socialIcons}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={styles.icon} viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.5 0 4.7.1 1.2.1 1.9.2 2.4.4.6.2 1 .4 1.4.8.4.4.6.8.8 1.4.2.5.3 1.2.4 2.4.1 1.2.1 1.5.1 4.7s0 3.5-.1 4.7c-.1 1.2-.2 1.9-.4 2.4-.2.6-.4 1-.8 1.4-.4.4-.8.6-1.4.8-.5.2-1.2.3-2.4.4-1.2.1-1.5.1-4.7.1s-3.5 0-4.7-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.4-1.4-.8-.4-.4-.6-.8-.8-1.4-.2-.5-.3-1.2-.4-2.4-.1-1.2-.1-1.5-.1-4.7s0-3.5.1-4.7c.1-1.2.2-1.9.4-2.4.2-.6.4-1 .8-1.4.4-.4.8-.6 1.4-.8.5-.2 1.2-.3 2.4-.4 1.2-.1 1.5-.1 4.7-.1m0-2.2C8.8 0 8.5 0 7.3.1c-1.3.1-2.3.3-3.2.6-.9.3-1.7.7-2.5 1.5C1.2 3 1 4 1 5.3c-.2 1.1-.2 1.4-.2 5.7s0 4.6.1 5.7c.1 1.3.3 2.3.6 3.2.3.9.7 1.7 1.5 2.5.8.8 1.6 1.2 2.5 1.5 1.1.3 1.4.4 5.7.4s4.6 0 5.7-.1c1.3-.1 2.3-.3 3.2-.6.9-.3 1.7-.7 2.5-1.5.8-.8 1.2-1.6 1.5-2.5.3-1.1.4-1.4.4-5.7s0-4.6-.1-5.7c-.1-1.3-.3-2.3-.6-3.2-.3-.9-.7-1.7-1.5-2.5-.8-.8-1.6-1.2-2.5-1.5-1.1-.3-1.4-.4-5.7-.4zm0 5.4c-2.9 0-5.3 2.4-5.3 5.3s2.4 5.3 5.3 5.3 5.3-2.4 5.3-5.3-2.4-5.3-5.3-5.3zm0 8.7c-1.9 0-3.5-1.6-3.5-3.5S10.1 8.4 12 8.4s3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm6.5-8.7c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={styles.icon} viewBox="0 0 24 24">
              <path d="M22.5 0h-21A1.5 1.5 0 000 1.5v21A1.5 1.5 0 001.5 24h10.5v-9h-3v-3.5h3v-2.6c0-3.3 2-5 4.9-5 1.4 0 2.7.1 3 .1v3.5h-2c-1.6 0-2 1.1-2 2.2v2.8h3.6l-.5 3.5H18v9h4.5a1.5 1.5 0 001.5-1.5v-21A1.5 1.5 0 0022.5 0z" />
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={styles.icon} viewBox="0 0 24 24">
              <path d="M30.753 6.673c-1.155-1.373-3.288-1.933-7.361-1.933h-14.785c-4.166 0-6.335 0.596-7.486 2.058-1.122 1.425-1.122 3.525-1.122 6.432v5.54c0 5.631 1.331 8.49 8.608 8.49h14.785c3.532 0 5.489-0.494 6.755-1.706 1.298-1.243 1.852-3.272 1.852-6.784v-5.54c0-3.065-0.087-5.178-1.247-6.557zM20.544 16.765l-6.714 3.509c-0.139 0.074-0.304 0.118-0.478 0.118-0.57 0-1.032-0.462-1.032-1.032 0 0 0 0 0-0.001v0-6.995c0-0.57 0.462-1.032 1.032-1.032 0.174 0 0.338 0.043 0.481 0.119l-0.006-0.003 6.714 3.486c0.333 0.176 0.557 0.52 0.557 0.916s-0.222 0.739-0.549 0.912l-0.006 0.003z"></path>
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={styles.icon} viewBox="0 0 24 24">
              <path d="M31.275 5.924c-0.419 0.193-0.933 0.385-1.462 0.542l-0.086 0.022c0.608-0.685 1.084-1.502 1.379-2.401l0.014-0.048c0.016-0.047 0.025-0.101 0.025-0.157 0-0.285-0.231-0.516-0.516-0.516-0.097 0-0.188 0.027-0.266 0.074l0.002-0.001c-1.037 0.627-2.239 1.118-3.519 1.407l-0.082 0.016c-1.278-1.249-3.014-1.96-4.808-1.96-3.788 0-6.87 3.082-6.87 6.869 0 0.298 0.019 0.595 0.056 0.888-4.7-0.413-9.070-2.723-12.071-6.404-0.095-0.116-0.239-0.19-0.4-0.19-0.189 0-0.355 0.102-0.445 0.254l-0.001 0.002c-0.609 1.044-0.93 2.239-0.93 3.454 0 1.655 0.591 3.226 1.635 4.453-0.357-0.125-0.66-0.263-0.949-0.426l0.029 0.015c-0.072-0.041-0.159-0.065-0.251-0.065-0.281 0-0.509 0.224-0.516 0.504v0.001c-0.001 0.030-0.001 0.061-0.001 0.092 0 2.471 1.33 4.695 3.363 5.907-0.206-0.021-0.385-0.047-0.56-0.082l0.038 0.006c-0.029-0.006-0.063-0.009-0.097-0.009-0.285 0-0.516 0.231-0.516 0.516 0 0.056 0.009 0.111 0.026 0.161l-0.001-0.004c0.753 2.349 2.69 4.078 5.032 4.604-1.943 1.217-4.164 1.854-6.496 1.854-0.001 0-0.001 0-0.002 0-0.512 0-1.017-0.031-1.513-0.091l0.060 0.006c-0.018-0.002-0.039-0.004-0.061-0.004-0.285 0-0.516 0.231-0.516 0.516 0 0.182 0.094 0.341 0.235 0.433l0.002 0.001c2.996 1.921 6.46 2.936 10.018 2.936 6.994 0 11.369-3.298 13.808-6.065 3.041-3.45 4.785-8.016 4.785-12.528 0-0.188-0.003-0.379-0.009-0.569 1.2-0.904 2.233-1.998 3.073-3.255 0.055-0.081 0.087-0.18 0.087-0.287 0-0.285-0.231-0.516-0.516-0.516-0.076 0-0.148 0.016-0.212 0.046l0.003-0.001z"></path>
            </svg>
          </a>
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
        <SwipeModal onClose={handleModalClose} teamMembers={teamMembers} />
      )}
    </div>
  );
}

export { App };
