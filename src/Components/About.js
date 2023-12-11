import React from 'react'
import './About.css'
import profPic from "../images/profpic.jpg"
import resume from "../files/Resume_Satya.pdf"
import HoverButton from "./HoverButton.js"
import 'aos/dist/aos.css';
import './Contact.css'
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import gmail from "../images/gmail.png"
import star from "../images/star.png"

class About extends React.Component {
    renderRecRow(category, count) {
        const hexagons = [];
        const categories = {
            langs: ['Python', 'Pyspark', 'C++', 'Java', 'HTML', 'CSS', 'Bootstrap', 'Github', 'JavaScript', 'ExpressJS', 'ReactJS', 'NodeJS', 'PHP', 'Kotlin', 'Power BI','Flask'],
            dbs: ['MySQL', 'MongoDB'],
            concepts: ['Statistics', 'Calculus', 'Machine Learning', 'Deep Learning'],
            cloud:['Microsoft Azure','Amazon Web Services','Google Cloud Platform']
        };
    
        const currentCategory = categories[category];
    
        for (let i = 0; i < count; i++) {
            hexagons.push(
                <div key={i} className={`skill-rectangle ${i % 2 === 0 ? 'even' : 'odd'}`}>
                    <span><a>{currentCategory[i]}</a></span>
                </div>
            );
        }
    
        return hexagons;
    }
    render() {
        function getProficiencyImages(n) {
            return Array(n).fill(star);
        }
        

        return <div id='about' className="about" >
            <div >
                <h1 data-aos="slide-right" data-aos-duration="1250">ABOUT ME</h1>
            </div>
            <div className="content">
            <div  className="image">
                    <img data-aos = "fade-down" data-aos-duration="750" src={profPic} alt=""></img>
                    <div data-aos = "fade-up" data-aos-duration="750" data-aos-anchor=".image">
                    <a href={resume} download="Resume" target='_blank'>
   <button className='button'>Resume</button>
</a>                    </div>
                 </div>
                <div className="text-section" data-aos ="fade-up" data-aos-duration="750">
                    <p className="text"> I'm currently pursuing a Master of Data Science degree at
                    <a className = "highlight" target = "_blank" rel="noopener noreferrer" href="https://www.ics.uci.edu/" > University of California Irvine</a>. 
                    Prior joining UCI, I worked as an Associate Data Scientist and Software Engineer for
                    <a className = "highlight" target = "_blank" rel="noopener noreferrer" href="https://www.shell.us/"> Shell</a>. 
                    I'm an avid learner with a keen passion for Data Science and holds a strong background in Software Engineering.
                     My research interests include but not limited to <span class="skill-highlight">Computer Vision, Reinforcement learning, and Natural Language Processing</span>. I enjoy integrating Data Science into Web and Mobile Apps.</p>
                     <p>On a personal front, I enjoy watching/playing Cricket. Furthermore, I'm into Anime, Football[Arsenal FC], Formula1[McLaren], and Gardening.</p>
                    {/* <table>
        <tbody>
            <tr>
                <td>SKILL</td>
                <td>PROFICIENCY</td>
            </tr>
            <tr>
                <td>Data Science<span class="skill-highlight"> [Python, Machine Learning, Deep Learning, Statistics]</span></td>
                <td>
                 {getProficiencyImages(5).map((imgSrc, index) => (
                     <img key={index} src={imgSrc}  />
                    ))}
                </td>
            </tr>
            <tr>
                <td>Pyspark</td>
                <td>
                 {getProficiencyImages(4).map((imgSrc, index) => (
                     <img key={index} src={imgSrc}  />
                    ))}
                </td>
            </tr>
            <tr>
                <td>C++</td>
                <td>
                 {getProficiencyImages(4).map((imgSrc, index) => (
                     <img key={index} src={imgSrc}  />
                    ))}
                </td>
            </tr>
            <tr>
                <td>Power BI</td>
                <td>
                 {getProficiencyImages(4).map((imgSrc, index) => (
                     <img key={index} src={imgSrc}  />
                    ))}
                </td>
            </tr>
            <tr>
                <td>Cloud Services <span class="skill-highlight">[Microsoft Azure, Amazon Web Services[AWS], Google Cloud Platform[GCP]]</span></td>
                <td>
                 {getProficiencyImages(3).map((imgSrc, index) => (
                     <img key={index} src={imgSrc}  />
                    ))}
                </td>
            </tr>
            <tr>
                <td>MERN Stack<span class="skill-highlight"> [MongoDB, Express JS, React JS, Node JS]</span></td>
                <td>
                 {getProficiencyImages(3).map((imgSrc, index) => (
                     <img key={index} src={imgSrc}  />
                    ))}
                </td>
            </tr>
            <tr>
                <td>XAMP Stack<span class="skill-highlight"> [Apache, MySQL, PHP]</span></td>
                <td>
                 {getProficiencyImages(4).map((imgSrc, index) => (
                     <img key={index} src={imgSrc}  />
                    ))}
                </td>
            </tr>
            <tr>
                <td>Android App Development<span class="skill-highlight"> [Java, Kotlin, Firebase]</span></td>
                <td>
                 {getProficiencyImages(4).map((imgSrc, index) => (
                     <img key={index} src={imgSrc}  />
                    ))}
                </td>
            </tr>
            
        </tbody>
    </table> */}
    <div  className="skills-set" >
    <h3>Skills</h3>
        <p className='test'>Programming Languages, APIs, & Tools</p>
        <div className="skillss">
    {this.renderRecRow("langs",16)} {}
    </div>
    <p className='test'>Databases</p>
    <div className="skillss">
          {this.renderRecRow("dbs",2)} {}
          </div>
          <p className='test'>Concepts</p>
    <div className="skillss">
          {this.renderRecRow("concepts",4)} {}
          </div>
          <p className='test'>Cloud Services</p>
    <div className="skillss">
          {this.renderRecRow("cloud",3)} {}
          </div>
    </div>
    <br></br>        
        </div>    
        </div></div>
    }
}

export default About;
