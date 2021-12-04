import './Technologies.css'
import { FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { FaGithubAlt } from 'react-icons/fa'
import { DiCss3 } from 'react-icons/di'
import { IoLogoHtml5 } from 'react-icons/io'
import { IoLogoNodejs } from 'react-icons/io'
import ProgressBar from 'react-bootstrap/ProgressBar'


function Technologies() {
    return (
        <div className="techonlogies-container">
                <div className="one-tech-container">
                    <span><FaReact 
                    className="tech-icon"
                    /></span>
                    <figcaption className="tech-name">React</figcaption> 
                    <div className="tech-progressbar"><ProgressBar variant="info" now={60} /></div>
                </div>
                <div className="one-tech-container">
                    <span><IoLogoJavascript 
                    className="tech-icon"
                    /></span>
                    <figcaption className="tech-name">Javascript</figcaption>
                    <div className="tech-progressbar"><ProgressBar variant="success" now={80} /></div>
                </div>   
                <div className="one-tech-container">
                    <span><FaGithubAlt 
                    className="tech-icon"
                    /></span>
                    <figcaption className="tech-name">Git / Github</figcaption>
                    <div className="tech-progressbar"><ProgressBar variant="info" now={80} /></div>
                </div>
                <div className="one-tech-container">
                    <span><DiCss3 
                    className="tech-icon"
                    /></span>
                    <figcaption className="tech-name">CSS</figcaption>
                    <div className="tech-progressbar"><ProgressBar variant="success" now={90} /></div>
                </div>
                <div className="one-tech-container">
                    <span><IoLogoHtml5 
                    className="tech-icon"
                    /></span>
                    <figcaption className="tech-name">HTML</figcaption>
                    <div className="tech-progressbar"><ProgressBar variant="success" now={90} /></div>
                </div>
                <div className="one-tech-container">
                    <span><IoLogoNodejs
                    className="tech-icon"
                    /></span>
                    <figcaption className="tech-name">NodeJs</figcaption>
                    <div className="tech-progressbar"><ProgressBar variant="warning" now={40} /></div>
                </div>
            </div>
    );
}

export default Technologies;