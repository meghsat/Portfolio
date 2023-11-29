import React from 'react'
import "./Patents.css"
import 'aos/dist/aos.css';

class Patents extends React.Component {

    render() {
        return <div id = "patents2" className = "patents2">
            <h1 data-aos="slide-left" data-aos-duration="1250">PUBLICATIONS</h1>
            <div className='patents'>
                <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="750"  className='Meera'>
                <a target="_blank" href='https://iprsearch.ipindia.gov.in/publicsearch' ><h3>MEERA: Movie Emotion Extraction for Review Assessment</h3>
                <h6>Publication date: 10/12/2021 | Publication no: 202141055109 | Publisher: Intellectual Property India</h6>
                <p>Abstract: In recent times, emotion Analysis has become an effective way to extract peoples' review about products.
                     We use this Emotion Extraction classification technique to generate reviews from movies. 
                     The future of the movie cast, and crew primarily depends on the reviews, but often these reviews are biased and are tampered. 
                     To handle these problems, we propose a less unbiased model called-MEERA (Movie Emotion Extraction for Review Assessment). 
                     The model extracts the facial emotions from spectators in movie theatres under poor lighting conditions and quantifies these expressions into reviews. 
                     MEERA handles various challenges like low light conditions, crowd segregation, appropriate time intervals to capture crowd emotions, and emotions to review quantification.</p>
                     <p className='fields'>Authors: Dr. BKSP Kumar Raju Alluri, Dr. D Sumathi, Megha Sri Satya Sai Devineni</p>
                     </a></div>
                <br></br>
                <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="750" className='Meera'>
                <h3><a href='' target="_blank">Alert Generation System for Non-face Mask Anonymous Users</a></h3>
                <h6>Publication date: Under Review | Publication no: Under Review | Publisher: Intellectual Property India</h6>
                <p>COVID-19 is causing a serious threat to the whole world. 
                    To avoid succumbing to the current deadly virus, one of the efficacious methods is wearing a face mask all the time. 
                    With present technological advancements, detecting a face mask in ample lightning is a trivial job. But detection of face masks in low light situations like movie theatre scenarios is a difficult task. 
                    Even though we manage to detect some non-face mask anonymous spectators, finding their seat numbers and alerting them manually without disturbing the rest of the crowd is yet another difficult challenge. 
                    In this work, we propose an algorithm that solves both the mentioned challenges, face mask detection in low light conditions and alert generation for anonymous non-face mask users.</p>
                    <p className='fields'>Authors: Dr. BKSP Kumar Raju Alluri, Dr. D Sumathi, Megha Sri Satya Sai Devineni</p>
                </div>

            </div>
           
            

        </div>

    };
}

export default Patents;