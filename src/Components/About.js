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
                    <p className="text"> I'm currently pursuing Master of Data Science degree at
                    <a className = "highlight" target = "_blank" rel="noopener noreferrer" href="https://www.ics.uci.edu/"> University of California Irvine</a>. 
                    Prior joining UCI, I worked as an Associate Data Scientist and Software Engineer for
                    <a className = "highlight" target = "_blank" rel="noopener noreferrer" href="https://www.shell.us/"> Shell</a>. 
                    I'm an avid learner with a keen passion for Data Science and holds a strong background in Software Engineering.
                     My research interests include but not limited to <span class="skill-highlight">Computer Vision, Reinforcement learning, and Natural Language Processing</span>. I enjoy integrating Data Science into Web and Mobile Apps.</p>
                
                    <table>
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
    </table>
                    {/* <p className = "text">If I'm not coding, I might be watching/playing Cricket. Furthermore, I'm into Anime, Football, F1, and Gardening.</p> */}
                    <br/>
                    <p className = "text-status">I'm actively looking for Summer Internship opportunities[Jun - Sep 2024] in the fields of Data Science and Software Development.
                     If you find me to be a good fit for your organisation, kindly please reach out to me here: </p>
            
                   </div>    
        </div>
        <div className="social" >
                      
                         <a href="mailto:meghasrisatyasaid@gmail.com">
                         <svg viewBox="0 0 32 32">
                        <path d="M30.996 7.824v17.382a2.044 2.044 0 0 1-2.044 2.044h-4.773V15.663L16 21.799l-8.179-6.136v11.588H3.049a2.044 2.044 0 0 1-2.044-2.044V7.824A3.067 3.067 0 0 1 5.92 5.376l-.008-.006L16 12.937 26.088 5.37a3.067 3.067 0 0 1 4.907 2.454z" />
                    </svg>
                                </a>
                        <a href="https://www.linkedin.com/in/meghadevineni/">
                        <svg viewBox="0 0 24 24">
                        <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
                    </svg>
                        </a>
                     
                    </div>
                        </div>
                   
             
    }
}

export default About;
