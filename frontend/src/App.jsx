//  import React from 'react';
// import './App.css'
// import Navbar from './Navbar/Navbar';
// import HomePageBanner from './HomePageBanner/HomePageBanner';
// import TopicsCovered from './TopicsCovered/topicscovered';
// import FooterComponent from './Footer/FooterTemp';


// function App() {
  

//   return (
//     <>
//       <Navbar/>
//       <HomePageBanner/>
//       <TopicsCovered />
//       <FooterComponent />
//     </>
//   )
// }

// export default App;


import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, and Routes
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/Navbar';
import HomePageBanner from './HomePageBanner/HomePageBanner';
import LinuxCourse from './Courses/Linux/Linux';



function App() {
  return (
    <Router> {/* Wrap your app with Router */}
      <Navbar />
      <Routes>  
        <Route path="/" element={<HomePageBanner />} /> {/* Home route */}
        <Route path="/linux" element={<LinuxCourse />} /> 
      </Routes>
     
    </Router>
  );
}

export default App;
