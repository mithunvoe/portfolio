import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faCode, faTrophy } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Flutter",
    "Dart",
    "Firebase",
    "Riverpod",
    "Provider",
    "Mobile UI",
    "Cross-platform",
    "Android Studio",
    "VS Code"
];

const labelsSecond = [
    "C++",
    "Java",
    "Python",
    "SQL",
    "LaTeX",
    "Rust",
    "React",
    "NextJS",
    "JavaScript"
];

const labelsThird = [
    "Git",
    "Docker",
    "Firebase",
    "Linux",
    "Ubuntu",
    "UNIX Shells",
    "Jupyter Notebooks",
    "Codeforces",
    "Competitive Programming"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faMobile} size="3x"/>
                    <h3>Mobile Development</h3>
                    <p>I specialize in Flutter development with strong programming fundamentals and experience building cross-platform mobile applications. I combine UI/UX design with efficient state management to deliver user-friendly solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Programming & Development</h3>
                    <p>Proficient in multiple programming languages with experience in competitive programming. I have solved over 1500 algorithmic problems and built projects ranging from mobile apps to system-level applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faTrophy} size="3x"/>
                    <h3>Competitive Programming & Tools</h3>
                    <p>Achieved Expert rating on Codeforces (1672) and 4-star rating on CodeChef. Winner of DUCTF 2024 and Runner Up at Battle of Brains 2024. Experienced with development tools and version control systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;