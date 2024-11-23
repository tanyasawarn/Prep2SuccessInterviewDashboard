// import React, {useState} from 'react';
// import './Navbar.css';
// import LoginForm from '../LoginForm/loginform';
// import { useNavigate } from 'react-router-dom';


// const Navbar = () => {

//   const [showLoginPage, setShowLoginPage] = useState(false);
//   const [userInitials, setUserInitials] = useState(null);
//   const [showLogoutMenu, setShowLogoutMenu] = useState(false);
//   const navigate = useNavigate(); 

//   const handleLoginClick = () => {
//     setShowLoginPage(true);
//   };

//   const handleCloseLoginForm = () => {
//     setShowLoginPage(false);
//   };

//   const handleUserLogin = (username) => {
//     if (!username) {
//       setUserInitials("NA"); // Fallback to 'NA' if username is not available
//     } else {
//       const initials = username.substring(0, 2).toUpperCase();
//       setUserInitials(initials);
//     }
//   };


//   const handleLogout = () => {
//     localStorage.removeItem("authToken"); // Clear auth token
//     localStorage.removeItem("usernameInitials"); // Clear username initials
//     setUserInitials("NA");
//     navigate("/"); // Redirect to homepage
//   };

//   return (
    
//     <div>
//       <div className="navbar">
//         <div className="navbar-left">
//           <img
//             src="your-logo-url" // Replace with your logo URL or path
//             alt="Logo"
//             className="navbar-logo"
//           />
//           <span className="navbar-title">Prep2Success</span>
//         </div>
//         <div className="navbar-center">
//           <a href="#practice" className="navbar-link">
//             Practice
//           </a>
//           <a href="#events" className="navbar-link">
//             Test Case Problems
//           </a>
//           <a href="#events" className="navbar-link">
//             About Us
//           </a>
//           <a href="#events" className="navbar-link">
//             Contact Us
//           </a>
//         </div>
//         <div className="navbar-right">
//           {userInitials ? (
//             <span className="navbar-user-initials">{userInitials}</span>
//           ) : (
//             <button className="navbar-button" onClick={handleLoginClick}>
//               Login
//             </button>
//           )}
//         </div>
//       </div>
//       {showLoginPage && (
//         <LoginForm
//           closeLoginForm={handleCloseLoginForm}
//           onUserLogin={handleUserLogin} // Pass the callback
//         />
//       )}
//     </div>
//   )
// }

// export default Navbar;


import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom'; // To redirect to homepage
import LoginForm from '../LoginForm/loginform';

const Navbar = () => {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [userInitials, setUserInitials] = useState(localStorage.getItem("usernameInitials") || "NA");
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);
  const navigate = useNavigate(); // For navigation

  const handleLoginClick = () => {
    setShowLoginPage(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginPage(false);
  };

  const handleUserLogin = (username) => {
    const initials = username.substring(0, 2).toUpperCase();
    setUserInitials(initials);
    localStorage.setItem("usernameInitials", initials); // Save initials in localStorage
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear auth token
    localStorage.removeItem("usernameInitials"); // Clear username initials
    setUserInitials("NA");
    navigate("/"); // Redirect to homepage
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <img
            src="your-logo-url" // Replace with your logo URL or path
            alt="Logo"
            className="navbar-logo"
          />
          <span className="navbar-title">Prep2Success</span>
        </div>
        <div className="navbar-center">
          <a href="#practice" className="navbar-link">Practice</a>
          <a href="#events" className="navbar-link">Test Case Problems</a>
          <a href="#events" className="navbar-link">About Us</a>
          <a href="#events" className="navbar-link">Contact Us</a>
        </div>
        <div className="navbar-right">
          {userInitials === "NA" ? (
            <button className="navbar-button" onClick={handleLoginClick}>Login</button>
          ) : (
            <div className="user-initials" onClick={() => setShowLogoutMenu(!showLogoutMenu)}>
              {userInitials}
              {showLogoutMenu && (
                <div className="logout-menu">
                  <button onClick={handleLogout} className='navbar-logout-button'>Log Out</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {showLoginPage && <LoginForm closeLoginForm={handleCloseLoginForm} onUserLogin={handleUserLogin} />}
    </div>
  );
};

export default Navbar;
