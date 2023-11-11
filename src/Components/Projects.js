import React from 'react'
import "./Projects.css"
import 'aos/dist/aos.css';


class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currentDivIndex: 0,
        };
      }
    
      handleNext = () => {
        const { currentDivIndex } = this.state;
        const totalDivs = 2; // Replace with the total number of divs you have
        const nextIndex = (currentDivIndex + 1) % totalDivs;
        this.setState({ currentDivIndex: nextIndex });
      };
    
      handlePrev = () => {
        const { currentDivIndex } = this.state;
        const totalDivs = 2; // Replace with the total number of divs you have
        const prevIndex = (currentDivIndex - 1 + totalDivs) % totalDivs;
        this.setState({ currentDivIndex: prevIndex });
      };
    render() {
        const divs=[
            <div className='projects2'>
            <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="750"  className='Policy'>
            <h4>Policy Handling Web-App</h4>
            <h6>Tech Stack: .NET, ReactJS, NoSQL</h6>
            <p>I have developed a comprehensive policy management system utilizing ReactJS and .NET, featuring distinct admin and 
                customer interfaces. Administrators can seamlessly add and modify policies, while customers can select tailored policies through questionnaire responses. 
                Our website incorporates an advanced chatbot for real-time customer support.</p>
          <a href='https://github.com/meghsat/Policy-Handler-Web-Application'>
          <svg className='svg-icons' viewBox="0 0 24 24" >
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,
                    20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,
                    15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,
                    16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,
                    7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,
                    7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,
                    17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg> </a>
          </div>
            <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="750" className='Policy'>
            <h4>Recommendation system for capital investments in Bangalore City</h4>
            <h6>Tech Stack: Python, ReactJS, Foursquare API</h6>
            <p>This project seeks to support entrepreneurs by recommending the most suitable locations to establish their 
                businesses in Bangalore. By leveraging extensive data and Machine Learning algorithms</p>
                <a href='https://github.com/meghsat/Recommendation-system-for-capital-investments-in-Bangalore-City'>
                <svg className='svg-icons' viewBox="0 0 24 24" >
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,
                    20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,
                    15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,
                    16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,
                    7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,
                    7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,
                    17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg> </a>             
                 <a href='https://medium.com/@srisatyasaidevineni/recommendation-system-for-capital-investments-in-bangalore-city-fd3251e0b82e'>
                <svg className='svg-icons' viewBox="0 0 24 24"  style={{paddingLeft:'4px',float:'right'}}>
                    <path d="m24 24h-24v-24h24zm-8.986-15.006v7.326c0 .198 0 .234-.127.362l-1.302 1.264v.27h6.32v-.27l-1.257
                    -1.234c-.091-.07-.148-.178-.148-.3 0-.022.002-.043.005-.064v.002-9.07c-.003-.019-.005-.04-.005-.062 0-.121
                    .058-.229.148-.298l.001-.001 1.286-1.234v-.27h-4.456l-3.176 7.924-3.609-7.924h-4.675v.271l1.502 1.813c.127
                    .115.207.281.207.466 0 .022-.001.043-.003.064v-.003 7.126c.007.041.011.088.011.136 0 .222-.088.423-.231.571
                    l-1.69 2.054v.27h4.8v-.27l-1.691-2.054c-.149-.154-.241-.363-.241-.595 0-.04.003-.079.008-.117v.004-6.16l4.215 9.195h.49z" />
                </svg> </a>
            </div>
            <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="750" className='Policy'>
            <h4>Dynamic web portal</h4>
            <h6>Tech Stack: PHP, MYSQL, Python, PyTesseract</h6>
            <p>I have designed and implemented a dynamic website tailored for Hospitals and Universities in Bangalore. 
                This platform efficiently extracts textual data from uploaded PDFs and seamlessly displays it on the portal. 
                Additionally, I've integrated a two-factor authentication system to enhance security by identifying and restricting suspicious logins based on IP address tracking.</p>
                <a href='https://github.com/meghsat/Dynamic-Web-Portal'>
                <svg className='svg-icons' viewBox="0 0 24 24" >
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,
                    20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,
                    15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,
                    16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,
                    7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,
                    7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,
                    17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg> </a>
            </div></div>,
            <div className='projects2'>
            <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="750"  className='Policy'>
            <h4>The Smart Lustro</h4>
            <h6>Tech Stack: C, Python, Java Script, Computer Vision, Raspberry Pi, Arduino</h6>
            <p>Built an IOT based smart mirror that detects the face of the person standing infront of it, 
                and then it displays personalized information like: To-do lists, diet, remainders, and email notifications.
                Irrespective of the person scanned, applications like Weather, news, spotify, and youtube can be accessed.
            </p>
          <a href='https://github.com/meghsat/The-Smart-Lustro'>
          <svg className='svg-icons' viewBox="0 0 24 24" >
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,
                    20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,
                    15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,
                    16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,
                    7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,
                    7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,
                    17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg> </a>
          </div>
            <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="750" className='Policy'>
            <h4>Tenant Finder</h4>
            <h6>Tech Stack: Java, Firebase Database</h6>
            <p>Designed and developed an android app that has two fronts, owner and tenant.
            App let's the Property owners to list their properties based on location and later enables them to edit the property details. 
            All the Listed properties can be viewd by the Tenants in Real-time, they can contact the property to book/buy the Property.
            </p>
                <a href='https://github.com/meghsat/Tenant-Finder-App'>
                <svg className='svg-icons' viewBox="0 0 24 24" >
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,
                    20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,
                    15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,
                    16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,
                    7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,
                    7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,
                    17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg> </a>             
            </div>
            <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="750" className='Policy'>
            <h4>Black inferno</h4>
            <h6>Tech Stack: Python, C, Computer Vision, Arduino, IR, and Ultra Sonic Sensor</h6>
            <p>We have built a car prototype that accounts for thermal radiation, distance variance, and object detection to avoid the surrounding obstacles.
                <br></br>
                <i><b>Semifinalist@ VIT-2018 Incubation trails.</b></i>
            </p>
                <a href='https://github.com/meghsat/Black-Inferno'>
                <svg className='svg-icons' viewBox="0 0 24 24" >
                    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,
                    20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,
                    15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,
                    16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,
                    7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,
                    7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,
                    17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg> </a>
                <a href='https://photos.google.com/share/AF1QipN86GpNLNH2dJR16Rx-_1fwy2TlWJuGCF8UesnC_CT0oXZdAMn1IchS7w62cVzV9Q?key=RVhTZjZZNC1PeG9LYlBGRHlMbTNpSFdvRHdsRmNB'>
                <svg width="100px" height="100px" viewBox="0 0 128 128" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"  style={{paddingLeft:'4px',float:'right',marginTop:'0px'}}>
                    <path d="M115.2 92.8c0 1.76 -1.44 3.2 -3.2 3.2H19.2c-1.76 0 -3.2 -1.44 -3.2 -3.2V30.4c0 -1.76 1.44 -3.2 3.2 -3.2H112c1.76 0 3.2 1.44 3.2 3.2v62.4z" 
                    fill="#E1E0A6"/><path d="M112 97.6H19.2c-2.72 0 -4.8 -2.08 -4.8 -4.8V30.4c0 -2.72 2.08 -4.8 4.8 -4.8H112c2.72 0 4.8 2.08 4.8 4.8v62.4c0 2.72 -2.08 
                    4.8 -4.8 4.8zM19.2 28.8c-0.96 0 -1.6 0.64 -1.6 1.6v62.4c0 0.96 0.64 1.6 1.6 1.6H112c0.96 0 1.6 -0.64 1.6 -1.6V30.4c0 -0.96 -0.64 -1.6 -1.6 -1.6H19.2z"
                     fill="#231C1C"/><path d="M73.6 92.8c0 1.76 -1.44 3.2 -3.2 3.2H32c-1.76 0 -3.2 -1.44 -3.2 -3.2 0 0 20.64 -27.2 22.4 -27.2 1.76 0 22.4 27.2 22.4 27.2z" 
                     fill="#B8CA43"/><path d="M70.4 97.6H32c-2.72 0 -4.8 -2.08 -4.8 -4.8v-0.48l0.32 -0.48C48.64 64 50.24 64 51.2 64s2.56 0 23.68 27.84l0.32 0.48v0.48c0 2.72 -2.08
                      4.8 -4.8 4.8zm-40 -4.32c0.16 0.64 0.8 1.12 1.6 1.12h38.4c0.8 0 1.28 -0.48 1.6 -1.12 -7.36 -9.6 -17.76 -22.88 -20.8 -25.76 -3.04 2.88 -13.44 16.16 -20.8 25.76z"
                       fill="#231C1C"/><path d="M115.2 91.2c0 2.56 -2.08 4.8 -4.8 4.8H53.6c-2.56 0 -4.8 -2.08 -4.8 -4.8 0 0 30.56 -40.16 33.12 -40.16 2.72 0 33.28 40.16 33.28 40.16z"
                        fill="#B8CA43"/><path d="M110.4 97.6H53.6c-3.52 0 -6.4 -2.88 -6.4 -6.4v-0.48l0.32 -0.48c31.04 -40.8 33.44 -40.8 34.4 -40.8s3.36 0 34.4 40.8l0.32 0.48v0.48c0.16 
                        3.52 -2.72 6.4 -6.24 6.4zm-59.84 -5.92c0.16 1.44 1.6 2.72 3.04 2.72h56.8c1.6 0 2.88 -1.12 3.04 -2.72C100.48 74.56 85.6 55.84 82.08 52.8c-3.52 3.04 -18.4 21.76 -31.52
                         38.88zm31.04 -39.2z" fill="#231C1C"/><path d="M32 44.8a6.4 6.4 0 1 0 12.8 0 6.4 6.4 0 1 0 -12.8 0Z" fill="#F29B54"/><path d="M38.4 52.8c-4.48 0 -8 -3.52 -8 -8s3.52 -8 
                         8 -8 8 3.52 8 8 -3.52 8 -8 8zm0 -12.8c-2.72 0 -4.8 2.08 -4.8 4.8s2.08 4.8 4.8 4.8 4.8 -2.08 4.8 -4.8 -2.08 -4.8 -4.8 -4.8z" fill="#231C1C"/></svg></a>
            </div></div>,
        ];
        const{currentDivIndex}=this.state;
        return <div id = "projects" className = "projects">
            <h1 data-aos="slide-left" data-aos-duration="1250">PROJECTS</h1>
            <div className='contentss'>
            <a className="previous" onClick={this.handlePrev}>
            <svg width="50px" height="50px" viewBox="0 0 3 3" version="1" 
            xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48"><path fill="#2196F3" 
            points="30.9,43 34,39.9 18.1,24 34,8.1 30.9,5 12,24" d="M1.931 2.688L2.125 2.494L1.131 1.5L2.125 0.506L1.931 0.313L0.75 1.5Z"/>
            </svg> </a>
               {divs[currentDivIndex]}
               <a className="next" onClick={this.handleNext}>
  <svg width="50" height="50" viewBox="0 0 3 3" version="1.1" transform="matrix(-1, 0, 0, 1, 0, 0)">
    <path fill="#2196F3" d="M1.931 2.688L2.125 2.494L1.131 1.5L2.125 0.506L1.931 0.313L0.75 1.5Z" />
  </svg>
</a>

            </div>

        </div>

    };
}

export default Projects;