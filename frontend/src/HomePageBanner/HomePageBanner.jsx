import React from 'react';
import './Homepagebanner.css';
import TopicsCovered from '../TopicsCovered/topicscovered';
import FooterComponent from '../Footer/FooterTemp';
import LearningPath from '../LearningPath/LearningPath';
 

function HomePageBanner() {
  return (
  <>
    <div className="banner-container">
      <div className="dashboard-container">
        <section className="content-section">
          <h1>
            Your ultimate preparation guide to ace the <br />
            <span className="highlight-text">next tech interview</span> success
          </h1>
          <ul className="features-list">
            <li>Designed by industry experts</li>
            <li>Live test cases and interviews questions</li>
            <li>10000+ tech professionals trained</li>
          </ul>
        </section>
      </div>
    
    </div>
    <TopicsCovered />
    <LearningPath />
    <FooterComponent />
    
  </>
  );
}

export default HomePageBanner;
