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
        text = 'An excellent mentored developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia'
        ></Exp>

        <Exp 
        title='CS Mentors'
        role = 'Junior Mentor'
        dates = 'June 2020 - June 2022'
        text = 'An excellent junior mentor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia'
        ></Exp>
        
        <Exp 
        title='Sheng Kee Bakery'
        role = 'Sales Clerk'
        dates = 'August 2022 - 2023'
        text = 'An excellent Baker. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat n'
        ></Exp>

        <Exp 
        title='Mathnasium'
        role = 'Instructor'
        dates = 'June 2020 - June 2022'
        text = 'An excellent instructor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia'
        ></Exp>
    </div>
  );
}

export default About;