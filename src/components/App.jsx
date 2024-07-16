// import React, { useState } from 'react';

// import App from './App';

// function Modal() {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => setIsOpen(true);
//   const closeModal = () => setIsOpen(false);

//   return (
//     <div>
//       <button onClick={openModal}>Open Modal</button>
//       {isOpen && (
//         <div id="swipeModal" className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={closeModal}>
//               &times;
//             </span>
//             <img
//               src="../components/devPhoto/images/image-1.png"
//               alt="Swipe 1"
//             />
//             <img
//               src="../components/devPhoto/images/image-2.jpeg"
//               alt="Swipe 2"
//             />
//             <img
//               src="../components/devPhoto/images/image-3.jpeg"
//               alt="Swipe 3"
//             />
//             <img
//               src="../components/devPhoto/images/image-4.png"
//               alt="Swipe 4"
//             />
//             <img
//               src="../components/devPhoto/images/image-5.png"
//               alt="Swipe 5"
//             />
//             <img
//               src="../components/devPhoto/images/image-6.jpeg"
//               alt="Swipe 6"
//             />
//             <img
//               src="../components/devPhoto/images/image-7.jpeg"
//               alt="Swipe 7"
//             />
//             <img
//               src="../components/devPhoto/images/image-8.png"
//               alt="Swipe 8"
//             />
//             <img src="../components/devPhoto/images/image-9.png" alt="Swipe 9" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// export {App};

















// import React, { useState } from 'react';
// import styles from './App.module.css';
// import SwipeModal from './Swipe/swipeModal'; // Ensure this path is correct


// // Importing images
// import image1 from '../components/devPhoto/images/image-1.png';
// import image2 from '../components/devPhoto/images/image-2.jpeg';
// import image3 from '../components/devPhoto/images/image-3.jpeg';
// import image4 from '../components/devPhoto/images/image-4.png';
// import image5 from '../components/devPhoto/images/image-5.png';
// import image6 from '../components/devPhoto/images/image-6.jpeg';
// import image7 from '../components/devPhoto/images/image-7.jpeg';
// import image8 from '../components/devPhoto/images/image-8.png';
// import image9 from '../components/devPhoto/images/image-9.png';

// const teamMembers = [
//   { id: 1, name: 'Bill Mico Malazarte', role: 'Team-Leader', imgSrc: image1 },
//   { id: 2, name: 'Alexander Dinoy Jr.', role: 'Scrum-master', imgSrc: image2 },
//   { id: 3, name: 'Cyfred Odarve', role: 'BackEnd Developer', imgSrc: image3 },
//   { id: 4, name: 'Crisanto Pedroso', role: 'FrontEnd Developer', imgSrc: image4 },
//   { id: 5, name: 'Franci Reyes Giordani', role: 'FrontEnd Developer', imgSrc: image5 },
//   { id: 6, name: 'Judielyn Pagente', role: 'FrontEnd Developer', imgSrc: image6 },
//   { id: 7, name: 'Jovelyn Molos', role: 'FrontEnd Developer', imgSrc: image7 },
//   { id: 8, name: 'Jed Alston Fallorina', role: 'BackEnd Developer', imgSrc: image8 },
//   { id: 9, name: 'Percival Aceron', role: 'BackEnd Developer', imgSrc: image9 },
// ];
// function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleModalOpen = () => {
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className={styles.App}>
//       {/* Other content of your webpage */}
//       <footer className={styles.footer}>
//         <p className={styles.follow}>FOLLOW US</p>
//         <div className={styles.socialIcons}>
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <svg className={styles.icon} viewBox="0 0 24 24">
//               <path d="M12 2.2c3.2 0 3.5 0 4.7.1 1.2.1 1.9.2 2.4.4.6.2 1 .4 1.4.8.4.4.6.8.8 1.4.2.5.3 1.2.4 2.4.1 1.2.1 1.5.1 4.7s0 3.5-.1 4.7c-.1 1.2-.2 1.9-.4 2.4-.2.6-.4 1-.8 1.4-.4.4-.8.6-1.4.8-.5.2-1.2.3-2.4.4-1.2.1-1.5.1-4.7.1s-3.5 0-4.7-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.4-1.4-.8-.4-.4-.6-.8-.8-1.4-.2-.5-.3-1.2-.4-2.4-.1-1.2-.1-1.5-.1-4.7s0-3.5.1-4.7c.1-1.2.2-1.9.4-2.4.2-.6.4-1 .8-1.4.4-.4.8-.6 1.4-.8.5-.2 1.2-.3 2.4-.4 1.2-.1 1.5-.1 4.7-.1m0-2.2C8.8 0 8.5 0 7.3.1c-1.3.1-2.3.3-3.2.6-.9.3-1.7.7-2.5 1.5C1.2 3 1 4 1 5.3c-.2 1.1-.2 1.4-.2 5.7s0 4.6.1 5.7c.1 1.3.3 2.3.6 3.2.3.9.7 1.7 1.5 2.5.8.8 1.6 1.2 2.5 1.5 1.1.3 1.4.4 5.7.4s4.6 0 5.7-.1c1.3-.1 2.3-.3 3.2-.6.9-.3 1.7-.7 2.5-1.5.8-.8 1.2-1.6 1.5-2.5.3-1.1.4-1.4.4-5.7s0-4.6-.1-5.7c-.1-1.3-.3-2.3-.6-3.2-.3-.9-.7-1.7-1.5-2.5-.8-.8-1.6-1.2-2.5-1.5-1.1-.3-1.4-.4-5.7-.4zm0 5.4c-2.9 0-5.3 2.4-5.3 5.3s2.4 5.3 5.3 5.3 5.3-2.4 5.3-5.3-2.4-5.3-5.3-5.3zm0 8.7c-1.9 0-3.5-1.6-3.5-3.5S10.1 8.4 12 8.4s3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm6.5-8.7c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1z" />
//             </svg>
//           </a>
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <svg className={styles.icon} viewBox="0 0 24 24">
//               <path d="M22.5 0h-21A1.5 1.5 0 000 1.5v21A1.5 1.5 0 001.5 24h10.5v-9h-3v-3.5h3v-2.6c0-3.3 2-5 4.9-5 1.4 0 2.7.1 3 .1v3.5h-2c-1.6 0-2 1.1-2 2.2v2.8h3.6l-.5 3.5H18v9h4.5a1.5 1.5 0 001.5-1.5v-21A1.5 1.5 0 0022.5 0z" />
//             </svg>
//           </a>
//           <a
//             href="https://youtube.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <svg className={styles.icon} viewBox="0 0 24 24">
//               <path d="M30.753 6.673c-1.155-1.373-3.288-1.933-7.361-1.933h-14.785c-4.166 0-6.335 0.596-7.486 2.058-1.122 1.425-1.122 3.525-1.122 6.432v5.54c0 5.631 1.331 8.49 8.608 8.49h14.785c3.532 0 5.489-0.494 6.755-1.706 1.298-1.243 1.852-3.272 1.852-6.784v-5.54c0-3.065-0.087-5.178-1.247-6.557zM20.544 16.765l-6.714 3.509c-0.139 0.074-0.304 0.118-0.478 0.118-0.57 0-1.032-0.462-1.032-1.032 0 0 0 0 0-0.001v0-6.995c0-0.57 0.462-1.032 1.032-1.032 0.174 0 0.338 0.043 0.481 0.119l-0.006-0.003 6.714 3.486c0.333 0.176 0.557 0.52 0.557 0.916s-0.222 0.739-0.549 0.912l-0.006 0.003z"></path>
//             </svg>
//           </a>

//           <span className={styles.install}>INSTALL HERE</span>
//           <div className={styles.socialIcons}>
//             <a href="app-store" target="_blank" rel="noopener noreferrer">
//               <svg className={styles.icon} viewBox="0 0 24 24">
//                 <path d="M23.667 4c2.393 0 4.333 1.94 4.333 4.333v0 15.333c0 2.393-1.94 4.333-4.333 4.333v0h-15.333c-2.393 0-4.333-1.94-4.333-4.333v0-15.333c0-2.393 1.94-4.333 4.333-4.333v0h15.333zM12.492 20.339h-2.319l-0.089 0.155-0.060 0.121c-0.048 0.113-0.076 0.245-0.076 0.383 0 0.552 0.448 1 1 1 0.318 0 0.602-0.149 0.785-0.381l0.002-0.002 0.076-0.113 0.68-1.163zM17.724 13.365l-1.161 1.989 3.544 6.144 0.075 0.113c0.185 0.239 0.471 0.391 0.793 0.391 0.552 0 1-0.448 1-1 0-0.138-0.028-0.269-0.078-0.388l0.002 0.007-0.060-0.123-0.669-1.16h1.167l0.136-0.008c0.444-0.063 0.792-0.41 0.854-0.849l0.001-0.005 0.009-0.136-0.009-0.136c-0.063-0.444-0.41-0.792-0.849-0.854l-0.005-0.001-0.136-0.009h-2.32l-2.293-3.973zM17.684 9.468c-0.145-0.086-0.319-0.137-0.505-0.137-0.319 0-0.603 0.149-0.786 0.381l-0.002 0.002-0.076 0.113-0.32 0.545-0.312-0.541-0.075-0.112c-0.185-0.237-0.47-0.389-0.791-0.389-0.131 0-0.256 0.025-0.371 0.071l0.007-0.002-0.135 0.067-0.113 0.075c-0.237 0.185-0.388 0.47-0.388 0.791 0 0.132 0.025 0.257 0.072 0.372l-0.002-0.007 0.067 0.133 0.883 1.531-2.908 4.979h-2.259l-0.136 0.009c-0.491 0.069-0.864 0.486-0.864 0.991s0.373 0.921 0.858 0.99l0.005 0.001 0.136 0.009h8.036l-1.153-2-2.308-0.001 3.8-6.503 0.060-0.12c0.048-0.113 0.077-0.245 0.077-0.384 0-0.367-0.198-0.688-0.492-0.862l-0.005-0.003z"></path>
//               </svg>
//             </a>
//             <a href="google-play" target="_blank" rel="noopener noreferrer">
//               <svg className={styles.icon} viewBox="0 0 24 24">
//                 <path d="M17 14.5l4.2-4.5-16.3-8.8c-0.1-0.1-0.3-0.1-0.6-0.2l12.7 13.5zM23 21l5.9-3.2c0.7-0.4 1.1-1 1.1-1.8s-0.4-1.5-1.1-1.8l-5.9-3.2-4.7 5 4.7 5zM2.4 1.9c-0.3 0.3-0.4 0.7-0.4 1.1v26c0 0.4 0.1 0.8 0.4 1.2l13.2-14.2-13.2-14.1zM17 17.5l-12.7 13.5c0.2 0 0.4-0.1 0.6-0.2l16.3-8.8-4.2-4.5z"></path>
//               </svg>
//             </a>
//           </div>
//         </div>

//         <p>
//           Developed with <span className={styles.heart}>&hearts;</span> by the{' '}
//           <span className={styles.teamName} onClick={handleModalOpen}>
//             Team-DevBenders @ 2024
//           </span>{' '}
//           | All Rights Reserved
//         </p>
//       </footer>
//       {isModalOpen && (
//         <SwipeModal onClose={handleModalClose} teamMembers={teamMembers} />
//       )}
//     </div>
//   );
// }

// export { App };
