import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-photo.jpg',
  paragraphOne:
    'As told above, my name is Daniel Reyes, but I prefer to go by DJ! I am a fun loving goofball that has a passion for music, soccer, fashion, and of course code. The challenges that come with coding are what have intrigued me and are what I have found are most rewarding when solved.',
  paragraphTwo:
    'After taking the advice of a close friend, I decided to pursue a career in web development by attending a 13 week bootcamp at Dev Mountain. In the begining of the course I felt so behind the level of experience that I would eventually come to, but after many long nights and games of ping-pong (yes, I know, ping-pong) I became a full-stack developer with real experience in an immersive and remote setting.',
  paragraphThree: 'Below are projects from my time at Dev Mountain in chronological order. Enjoy.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'tagged.png',
    title: 'Tagged (No Database)',
    info:
      'Tagged is a static blog site built with no database. It was my first project built with React and Express.',
    info2: '',
    url: '',
    repo: 'https://github.com/dreyes06/NodeDB', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'dr-photo.png',
    title: 'DR Photography',
    info:
      'DR Photography was my first Full-Stack website (PostgreSQL, Express, React, and Node.js). This project incorporated Stripe, a third party payment technology, that was user friendly to incorporate.',
    info2: '',
    url: 'http://142.93.67.119:6060/',
    repo: 'https://github.com/dreyes06/DR-Photography', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'pawwaround.png',
    title: 'PawwAround',
    info:
      'PawwAround was a collaborative Full-Stack dog meet up site built with two of my classmates from Dev Mountain. My role in this project was to manage the backend and RESTful API calls, whilst helping where I could with the Front-end of the project.',
    info2: '',
    url: 'http://157.245.169.87:3001/',
    repo: 'https://github.com/project-cactus-rango/Pawwaround', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'djreyes042497@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/explore',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/dreyes06',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/daniel-reyes-jr/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/dreyes06',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
