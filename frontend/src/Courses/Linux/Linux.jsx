import React from "react";
import CourseTemplate from "../../CourseTemplate/CourseTemplate";

const LinuxCourse = () => {
  const questionCounts = {
    beginner: 10,
    intermediate: 15,
    advanced: 20,
    interviewQuestions: 8,
    cheatSheet: 0,
  };

  const descriptions = {
    beginner: "Beginner-level questions are essential for building a solid foundation in Linux. These questions focus on the basic concepts and commands that are frequently asked in entry-level interviews.",
    intermediate: " Intermediate level questions test your understanding of Linux in a professional environment, covering more complex scenarios and requiring you to apply your foundational knowledge to solve real-world problems.",
    advanced: " Advanced level questions challenge your deep understanding of Linux, pushing you to demonstrate expertise in handling complex scenarios such as performance optimization and system troubleshooting.",
    interviewQuestions: " These questions are commonly asked in real-world interviews, testing your ability to apply Linux knowledge to solve time-sensitive issues, optimize system performance, and address critical, real-world scenarios under pressure.",
    cheatSheet: "Download the Linux cheat sheet for a quick reference to commands and key concepts."
  };

  // Define the overview as JSX to be passed dynamically
  const overview = (
    <div>
      <h1 className="linux-course-heading">Overview</h1>
      <p>
        Welcome to the curated list of the most classic Linux interview
        questions. These questions have been carefully selected to help
        you ace your next interview and prepare you for a role involving
        Linux. Our list is divided into three categories based on
        difficulty:
      </p>
      <ul>
        <li><strong>Beginner Collection</strong> - Covers basic Linux commands, file systems, and general OS concepts.</li><br/>
        <li><strong>Intermediate Collection</strong> - Includes more advanced topics like process management, memory management, and system configuration.</li><br/>
        <li><strong>Advanced Collection</strong> - Contains challenging questions on performance tuning, networking, kernel modules, and debugging techniques.</li><br/>
        <li><strong>Real-Time Interview Collection</strong> - Contains challenging questions on performance tuning, networking, kernel modules, and debugging techniques.</li><br/>
        <li><strong>Cheat Sheet Collection</strong> - Contains key commands and quick tips for Linux professionals.</li><br/>
      </ul>
      <p>
        Similar to mastering any skill, preparing for a Linux-related tech
        interview can be significantly enhanced through deliberate
        practice. The more problems you solve, the more familiar you'll
        become with Linux tools, commands, and system concepts.
      </p>
      <p>
        It's highly recommended to revisit this list multiple times to
        improve your understanding. By the second attempt, you will uncover
        new tricks, while by the third attempt, you should find your code
        more efficient and refined.
      </p>
      <p>
        However, remember that simply memorizing solutions won't make you
        proficient. The true value comes from solving these problems on
        your own. Deliberate practice involves discovering solutions,
        experimenting with different approaches, and gaining deep insights
        into how Linux works under the hood.
      </p>
      <p>
        Keep pushing yourself, and you’ll find that the more you practice,
        the more natural it will feel when applying these concepts to real-world scenarios.
      </p>
    </div>
  );

  return (
    <CourseTemplate
      courseName="Linux"
      questionCounts={questionCounts}
      descriptions={descriptions}
      overview={overview} // Pass the overview as a prop
    />
  );
};

export default LinuxCourse;
