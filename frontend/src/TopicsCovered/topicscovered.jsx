// import React from 'react';
// import './topicscovered.css';
// import Linux from '../assets/Website-Icons (4).svg';
// import Git from '../assets/Website-Icons (3).svg';
// import Docker from '../assets/Website-Icons (6).svg';
// import Jenkins from '../assets/Website-Icons (1).svg';
// import Kubernetes from '../assets/Website-Icons (5).svg';
// import Terraform from '../assets/Website-Icons (7).svg';
// import Ansible from '../assets/Website-Icons (2).svg';
 

// const tracks = [
//   { id: 1, title: 'Linux',  image: Linux, },
//   { id: 2, title: 'Git',  image: Git, },
//   { id: 3, title: 'Docker',  image: Docker, },
//   { id: 4, title: 'Jenkins',  image: Jenkins, },
//   { id: 5, title: 'Kubernetes',  image: Kubernetes, },
//   { id: 6, title: 'Terraform',   image: Terraform,},
//   { id: 7, title: 'Ansible',   image: Ansible,},
 
// ];

// const TopicsCovered = () => {
//   return (
//     <div className="popular-tracks">
//       <h2>Popular Tracks</h2>
//       <div className="track-cards">
//         {tracks.map((track) => (
//           <div key={track.id} className="track-card" style={{ backgroundColor: track.color }}>
//            <div className="track-icon">
//               <img src={track.image} alt={track.title} />
//             </div>
//             <div className="track-info">
//               <h3>{track.title}</h3>
             
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TopicsCovered;



import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './topicscovered.css';
import Linux from '../assets/Website-Icons (4).svg';
import Git from '../assets/Website-Icons (3).svg';
import Docker from '../assets/Website-Icons (6).svg';
import Jenkins from '../assets/Website-Icons (1).svg';
import Kubernetes from '../assets/Website-Icons (5).svg';
import Terraform from '../assets/Website-Icons (7).svg';
import Ansible from '../assets/Website-Icons (2).svg';

const tracks = [
  { id: 1, title: 'Linux', image: Linux, route: '/linux' },
  { id: 2, title: 'Git', image: Git, route: '/git' },
  { id: 3, title: 'Docker', image: Docker, route: '/docker' },
  { id: 4, title: 'Jenkins', image: Jenkins, route: '/jenkins' },
  { id: 5, title: 'Kubernetes', image: Kubernetes, route: '/kubernetes' },
  { id: 6, title: 'Terraform', image: Terraform, route: '/terraform' },
  { id: 7, title: 'Ansible', image: Ansible, route: '/ansible' },
];

const TopicsCovered = () => {
  return (
    <div className="popular-tracks">
      <h2>Popular Tracks</h2>
      <div className="track-cards">
        {tracks.map((track) => (
          <Link key={track.id} to={track.route} className="track-card" style={{ backgroundColor: track.color }}>
            <div className="track-icon">
              <img src={track.image} alt={track.title} />
            </div>
            <div className="track-info">
              <h3>{track.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopicsCovered;
