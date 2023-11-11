import React from 'react'; 
import './App.css';
import NavBar from './Components/NavBar.js'
import HoverButton from './Components/HoverButton.js'
import About from './Components/About.js'
import Patents from './Components/Patents.js'
import Projects from './Components/Projects.js'

import Contact from './Components/Contact.js'
import Particles from 'react-particles-js';
import particleConfig from './files/particlesjs-config.json'
import AOS from 'aos'
import 'aos/dist/aos.css';
import shell from './images/shell.png';
import uci from './images/uc.png';
import vit from './images/vit.png';

AOS.init()

console.log(particleConfig)

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Raleway:400,600,700&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>

      <NavBar>        
      </NavBar>
      <header className="App-heading" id="home" data-aos="flip-up" data-aos-duration="1000">
        {/* <Particles className="particle-container" params={particleConfig} /> */}
        <div style={{position: "absolute"}}>
           
            <p className="greeting">
              Hello, my name is <span className="name" >Megha Sri Satya Sai Devineni [Satya]</span>
            </p>
            <br></br>
            <p className="Intro">
              A blend of Data Science & Software Development
            </p>
            <br/>
            <ul className="life">
            <li><img src={uci} className="his-logos" /><br/>Master of Data Science<br></br><p className='datess'>[09/2023 - 12/2024]</p></li>
            <li><img src={shell} className="his-logos2"/><br/>Associate Data Scientist<br></br><p className='datess'>[10/2021 - 09/2023]</p></li>
            <li><img src={vit} className="his-logos"/><br/>Bachelor's in Computer Science & Data Analytics<br></br><p className='datess'>[05/2017 - 06/2021]</p></li>

            </ul>
            <br/>
            <HoverButton page="#about" text="Know more about me :)"></HoverButton>
          
          
        </div>
        
      </header>

      <About></About>

      <Patents></Patents>
      <Projects></Projects>
      <Contact></Contact>

      <footer>
        <a href="https://github.com/ramanxg/Portfolio" target="_blank" rel="noopener noreferrer">Hosted on Github with </a>
      </footer>
      
    </div>
    
    
  );
}

export default App;
