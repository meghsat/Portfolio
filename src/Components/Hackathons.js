import React from 'react';
import './Hackathons.css';

class Hackathons extends React.Component {
  renderHexRow(count) {
    const hexagons = [];
  const  certifications= [
 
      { text: 'AI-900: Azure AI fundamentals', link: 'https://www.credly.com/badges/d6a00206-6699-4f56-a482-f5e10f9ddf07/public_url' },
      { text: 'Pyspark Learnathon', link: '' },
      { text: 'Databricks Codefest', link: 'https://drive.google.com/file/d/1cBk4JeegnI4BRzckWxmvd29uIQ5X_HX8/view?usp=sharing' },
      { text: 'OpenHack: AI-Powered Knowledge Mining', link: 'https://www.credly.com/badges/aa0ec33d-8ed1-4f2f-b10c-d11532b44489/linked_in_profile' },
      { text: 'Software Developer Boot Camp', link: 'https://drive.google.com/file/d/13WgIGACIjG4YXPfKvRejzDZqcmi0meJm/view?usp=sharing' },
      { text: 'Neural Networks and Deep Learning', link: 'https://coursera.org/share/19b61de502a0bfbb15f920e7fd64891b' },
      { text: 'IBM Data Science Specialization', link: 'https://www.coursera.org/account/accomplishments/specialization/ZQAPZR4V5GWH' },
      { text: 'Big Query for ML, Data, and Image Processing', link: 'https://www.qwiklabs.com/public_profiles/640a3f80-f13e-4e61-a909-2a49b6fb01e1' },
      {text:'Programming in HTML5 with JavaScript and CSS3',link:'https://www.udemy.com/certificate/UC-GD9EZFMM/'},
      {text:'MATLAB Onramp',link:'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=3593d5fa-138d-4890-b2f7-7d51b5b9d549'},
      {text:'Introduction to Python',link:'https://www.datacamp.com/statement-of-accomplishment/course/278ed456fd0ff6e8c27b522dbb7f5e73eb127216?raw=1'},

    ];
    for (let i = 0; i < count; i++) {
      hexagons.push(
        <div key={i} className={`circle ${i % 2 === 0 ? 'even' : 'odd'}`}>
          <div className="left"></div>
          <div className="middle">
            
          </div>
          <div className="right"></div>
          <span className='certf'><a href={certifications[i].link} target="_blank">{certifications[i].text}</a></span>
        </div>
      );
    }
    return hexagons;
  }

  render() {
    return (
      <div id='certifications' className='certifications'>
        <h1 data-aos="slide-left" data-aos-duration="1250">CERTIFICATIONS</h1>
        <div className="hex-grid">
          {this.renderHexRow(11)} 
    
        </div>
      </div>
    );
  }
}

export default Hackathons;
