import React from 'react';
import Exp from '../components/Exp.jsx';

function About() {
  return (
    <div id="about"> {}
      <p className="about-header">experience</p>
      

        <Exp 
        title='Codebase'
        role = 'Mentored Dev'
        dates = 'September 2023 - present'
        text = '• Designed and implemented a full stack web application for Open Heart Kitchen to manage schedule employee shifts. • Developed a dashboard, admin access model, and auto-assign shifts algorithm for employees. • Built mySQL and Express.js back-end for data fetching, sorting, and editing functionalities.'
        ></Exp>

        <Exp 
        title='CS Mentors'
        role = 'Junior Mentor'
        dates = 'September 2023 - present'
        text = '• Leads biweekly discussion and review sessions for 6 students on Discrete Mathematics and Probability Theory. • Creates weekly video solutions for club-curated worksheets for use by 120+ students.'
        ></Exp>

        <Exp 
        title='CS 61B'
        role = 'Academic Intern'
        dates = 'September 2023 - present'
        text = '• Holds 15-minute lectures and assists 30 undergraduate students during lab sections in learning core data structures and algorithm concepts'
        ></Exp>
        
        <Exp 
        title='Sheng Kee Bakery'
        role = 'Sales Clerk'
        dates = 'August 2022 - August 2023'
        text = '• Worked in a high-traffic bakery a block away from campus, serving an average of around 30 hourly customers. • Trained three new employees and resolved a wide range of issues, from technical networking issues to customer concerns.'
        ></Exp>

        <Exp 
        title='Mathnasium'
        role = 'Instructor'
        dates = 'June 2020 - June 2022'
        text = '• Engaged with 100+ K-12 students in an intimate 4:1 instructor-student setting. • Collaborated and communicated with parents, students, and colleagues to build and refine customized learning plans tailored to each student.'
        ></Exp>
    </div>
  );
}

export default About;