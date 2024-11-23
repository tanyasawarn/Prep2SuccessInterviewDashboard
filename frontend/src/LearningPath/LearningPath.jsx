// import React from "react";
// import "./LearningPath.css";

// const LearningPath = () => {
//   return (
//     <div className="learning-path-container">
//       <div className="learning-path-card">
//         <h3>Beginner</h3>
//         <div className="learning-path-card-content">
//           <p>1 Video</p>
//           <p>19 Problems</p>
//         </div>
//         <div className="learning-path-play-icon">▶️</div>
//         <div className="learning-path-stars">☆☆☆☆☆</div>
//       </div>

//       <div className="learning-path-card">
//         <h3>Intermediate</h3>
//         <div className="learning-path-card-content">
//           <p>1 Video</p>
//           <p>12 Problems</p>
//         </div>
//         <div className="learning-path-play-icon">▶️</div>
//         <div className="learning-path-stars">☆☆☆☆☆</div>
//       </div>

//       <div className="learning-path-card">
//         <h3>Advance</h3>
//         <div className="learning-path-card-content">
//           <p>1 Video</p>
//           <p>16 Problems</p>
//         </div>
//         <div className="learning-path-play-icon">▶️</div>
//         <div className="learning-path-stars">☆☆☆☆☆</div>
//       </div>
      
//       <div className="learning-path-card">
//         <h3>Real Time Test Cases</h3>
//         <div className="learning-path-card-content">
//           <p>1 Video</p>
//           <p>20 Problems</p>
//         </div>
//         <div className="learning-path-play-icon">▶️</div>
//         <div className="learning-path-stars">☆☆☆☆☆</div>
//       </div>
//       <div className="learning-path-card">
//         <h3>Interview Questions</h3>
//         <div className="learning-path-card-content">
//           <p>1 Video</p>
//           <p>20 Problems</p>
//         </div>
//         <div className="learning-path-play-icon">▶️</div>
//         <div className="learning-path-stars">☆☆☆☆☆</div>
//       </div>
//       <div className="learning-path-card">
//         <h3>Cheat Sheet</h3>
//         <div className="learning-path-card-content">
//           <p>1 Video</p>
//           <p>20 Problems</p>
//         </div>
//         <div className="learning-path-play-icon">▶️</div>
//         <div className="learning-path-stars">☆☆☆☆☆</div>
//       </div>
//     </div>
//   );
// };

// export default LearningPath;


import React from "react";
import "./LearningPath.css";

const LearningPath = ({ paths = []  }) => {
  return (
    <div className="learning-path-container">
      {paths.map((path, index) => (
        <div key={index} className="learning-path-card">
          <h3>{path.level}</h3>
          <div className="learning-path-card-content">
            <p>{path.videos} Video{path.videos > 1 ? 's' : ''}</p>
            <p>{path.problems} Problem{path.problems > 1 ? 's' : ''}</p>
          </div>
          <div className="learning-path-play-icon">▶️</div>
          <div className="learning-path-stars">☆☆☆☆☆</div>
        </div>
      ))}
    </div>
  );
};

export default LearningPath;
