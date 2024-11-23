import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "./CourseTemplate.css";
import LoginForm from "../LoginForm/loginform";

const CourseTemplate = ({ courseName, questionCounts, descriptions, overview }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("overview");
  const [showLoginPage, setShowLoginPage] = useState(false);

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  const handleLoginClick = () => {
    setShowLoginPage(true);
  };

  const handleCloseLoginForm = () => {
    setShowLoginPage(false);
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case "overview":
        return (
          <div>
            <p>{overview}</p> {/* Dynamic overview content */}
          </div>
        );
      case "beginner":
        return (
          <div>
           
            <p>{descriptions.beginner}</p>
            <div className="login-prompt">
              <span>
                Please{" "}
                <button onClick={handleLoginClick} className="login-form-button">
                  login
                </button>{" "}
                to see more details.
              </span>
            </div>
            <div className="question-list">
              {Array.from({ length: questionCounts.beginner }).map((_, index) => (
                <div key={index} className="question-item">
                  <input type="checkbox" />
                  <span className="question-placeholder">Question {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "intermediate":
        return (
          <div>
          
            <p>{descriptions.intermediate}</p>
            <div className="login-prompt">
              <span>
                Please{" "}
                <button onClick={handleLoginClick} className="login-form-button">
                  login
                </button>{" "}
                to see more details.
              </span>
            </div>
            <div className="question-list">
              {Array.from({ length: questionCounts.intermediate }).map((_, index) => (
                <div key={index} className="question-item">
                  <input type="checkbox" />
                  <span className="question-placeholder">Question {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "advanced":
        return (
          <div>
          
            <p>{descriptions.advanced}</p>
            <div className="login-prompt">
              <span>
                Please{" "}
                <button onClick={handleLoginClick} className="login-form-button">
                  login
                </button>{" "}
                to see more details.
              </span>
            </div>
            <div className="question-list">
              {Array.from({ length: questionCounts.advanced }).map((_, index) => (
                <div key={index} className="question-item">
                  <input type="checkbox" />
                  <span className="question-placeholder">Question {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "interviewQuestions":
        return (
          <div>
           
            <p>{descriptions.interviewQuestions}</p>
            <div className="login-prompt">
              <span>
                Please{" "}
                <button onClick={handleLoginClick} className="login-form-button">
                  login
                </button>{" "}
                to see more details.
              </span>
            </div>
            <div className="question-list">
              {Array.from({ length: questionCounts.interviewQuestions }).map((_, index) => (
                <div key={index} className="question-item">
                  <input type="checkbox" />
                  <span className="question-placeholder">Question {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "cheatSheet":
        return (
          <div>
          
            <div className="login-prompt">
              <span>
                Please{" "}
                <button onClick={handleLoginClick} className="login-form-button">
                  login
                </button>{" "}
                to download Cheat Sheet PDF.
              </span>
            </div>
          </div>
        );
      default:
        return <div>Select a topic from the menu to get started.</div>;
    }
  };

  return (
    <div className="course-layout">
      <Sidebar className="custom-sidebar">
        <Menu>
          <MenuItem onClick={() => handleMenuItemClick("overview")} className="pro-menu-item">Overview</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("beginner")} className="pro-menu-item">Beginner</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("intermediate")} className="pro-menu-item">Intermediate</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("advanced")} className="pro-menu-item">Advanced</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("interviewQuestions")} className="pro-menu-item">Interview Questions</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("cheatSheet")} className="pro-menu-item">Cheat Sheet</MenuItem>
        </Menu>
      </Sidebar>
      <main className="main-content">
        {renderContent()}
        {showLoginPage && <LoginForm closeLoginForm={handleCloseLoginForm} />}
      </main>
    </div>
  );
};

export default CourseTemplate;
