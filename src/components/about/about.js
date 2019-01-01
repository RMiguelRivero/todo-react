import React from 'react';
import './about.css';

const AboutComponent = () => (
  <div className="about">
    <p>
      This project has been built using the following tech stack:
    </p>

    <ul className="about-list">
      <li className="about-list-item"> Node: v6.8.0 </li>
      <li className="about-list-item"> react: 16.6.3 </li>
      <li className="about-list-item"> react-dom: 16.6.3 </li>
      <li className="about-list-item"> react-router-dom: 4.3.1 </li>
      <li className="about-list-item"> prop-types: 15.6.2 </li>
    </ul>

    <p>
      If you want to have a look at the source code. You can download it from a github repository&nbsp;
      <a href="http://github.com/miguelrivero/learning-react">miguelrivero/learning-react</a>
    </p>

    <p> You can clone the repository and run it locally:</p>
    <ul className="about-list">
      <li className="about-list-item">
        Install all dependencies
        <pre className="about-pre"> yarn </pre>
      </li>

      <li className="about-list-item">
        Run the server
        <pre className="about-pre"> yarn start </pre>
      </li>

      <li className="about-list-item">
        In order to build for production, execute
        <pre className="about-pre"> yarn build </pre>
      </li>
    </ul>
  </div>
);

export default AboutComponent;
