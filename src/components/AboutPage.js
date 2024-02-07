import React from 'react';
// import useSmoothScroll from '../components/useSmoothScroll';
import '../components/css/AboutPage.css';

export default function AboutPage() {
  
  return (
    <div className="about-container">
      <section className="education">
        <h2>Education</h2>
        <p>University at Buffalo (Aug 2022 - Jan 2024) - Masters in Computer Science with specialization in Artificial Intelligence and Machine Learning</p>
        <p>Sreenidhi Institute of Science and Technology (Aug 2017 - Aug 2021) - Bachelor's in Information Technology</p>
      </section>

      <section className="achievements">
        <h2>Achievements</h2>
        
          <p>Gold Medalist - Topper of the Department in Bachelors, 2019</p>
          <p>Received an Appreciation Certificate from Smriti Zubin Irani, the Education Minister of India, for exceptional performance in the X standard</p>
        
      </section>
    </div>
  );
};