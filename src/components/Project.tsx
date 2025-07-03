import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faGamepad, faCode, faTrophy, faMedal, faUsers, faStar } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project-card">
                <div className="card-header">
                    <FontAwesomeIcon icon={faMobile} size="3x" color="#4ECDC4"/>
                    <a href="https://github.com/ninadgns/Android-Project-Pink-Flag" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="github-icon"/>
                    </a>
                </div>
                <a href="https://github.com/ninadgns/Android-Project-Pink-Flag" target="_blank" rel="noreferrer"><h2>Recipe App</h2></a>
                <div className="tech-stack">
                    <span className="tech-tag">Flutter</span>
                    <span className="tech-tag">Firebase</span>
                    <span className="tech-tag">Supabase</span>
                </div>
                <p>Developed a feature-rich recipe application using Flutter and Supabase for backend services. Implemented user authentication using Firebase, recipe search, favorites, and social sharing features with clean architecture principles.</p>
            </div>
            
            <div className="project-card">
                <div className="card-header">
                    <FontAwesomeIcon icon={faCode} size="3x" color="#45B7D1"/>
                    <a href="https://github.com/mithunvoe/sudoku_solver" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="github-icon"/>
                    </a>
                </div>
                <a href="https://github.com/mithunvoe/sudoku_solver" target="_blank" rel="noreferrer"><h2>Sudoku Solver App</h2></a>
                <div className="tech-stack">
                    <span className="tech-tag">Flutter</span>
                    <span className="tech-tag">Firebase</span>
                    <span className="tech-tag">Algorithm</span>
                </div>
                <p>Built an interactive Sudoku solver app with automatic solving algorithms for all difficulty levels. Integrated Firebase authentication for secure user logins and established social sharing features.</p>
            </div>
            
            <div className="project-card">
                <div className="card-header">
                    <FontAwesomeIcon icon={faGamepad} size="3x" color="#F39C12"/>
                    <a href="https://github.com/mithunvoe/Hill-Climb-Racing" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="github-icon"/>
                    </a>
                </div>
                <a href="https://github.com/mithunvoe/Hill-Climb-Racing" target="_blank" rel="noreferrer"><h2>Hill Climb Racing</h2></a>
                <div className="tech-stack">
                    <span className="tech-tag">C++</span>
                    <span className="tech-tag">SDL2</span>
                    <span className="tech-tag">Physics</span>
                </div>
                <p>Built this physics-based racing game as a group project using C++ and SDL2. Implemented realistic physics and game mechanics without using any game engines, showcasing low-level programming skills.</p>
            </div>
            
            <div className="project-card">
                <div className="card-header">
                    <FontAwesomeIcon icon={faCode} size="3x" color="#E74C3C"/>
                    <a href="https://github.com/mithunvoe/online-judge" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="github-icon"/>
                    </a>
                </div>
                <a href="https://github.com/mithunvoe/online-judge" target="_blank" rel="noreferrer"><h2>Online Judge Platform</h2></a>
                <div className="tech-stack">
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">MongoDB</span>
                    <span className="tech-tag">Docker</span>
                </div>
                <p>Currently developing a comprehensive online judge platform for competitive programming. Features include real-time code execution, problem management, contest hosting, and secure sandboxed environment for code evaluation across multiple programming languages.</p>
            </div>
            
            <div className="project-card">
                <div className="card-header">
                    <FontAwesomeIcon icon={faCode} size="3x" color="#9B59B6"/>
                    <a href="https://github.com/mithunvoe/distributed-storage" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="github-icon"/>
                    </a>
                </div>
                <a href="https://github.com/mithunvoe/distributed-storage" target="_blank" rel="noreferrer"><h2>Distributed Storage System</h2></a>
                <div className="tech-stack">
                    <span className="tech-tag">Go</span>
                    <span className="tech-tag">Raft</span>
                    <span className="tech-tag">gRPC</span>
                    <span className="tech-tag">Kubernetes</span>
                </div>
                <p>Building a fault-tolerant distributed storage system with consistent hashing and replication. Implementing Raft consensus algorithm for leader election and log replication, with automatic failover and data recovery capabilities.</p>
            </div>
            
            <div className="project-card">
                <div className="card-header">
                    <FontAwesomeIcon icon={faUsers} size="3x" color="#27AE60"/>
                    <a href="https://github.com/mithunvoe/sociofi-task-manager" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="github-icon"/>
                    </a>
                </div>
                <a href="https://github.com/mithunvoe/sociofi-task-manager" target="_blank" rel="noreferrer"><h2>Employee Task Management App</h2></a>
                <div className="tech-stack">
                    <span className="tech-tag">Flutter</span>
                    <span className="tech-tag">Firebase</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">MongoDB</span>
                </div>
                <p>Developing a comprehensive task management application for Sociofi Technology to streamline employee workflow. Features include task assignment, progress tracking, team collaboration, real-time notifications, and performance analytics dashboard.</p>
            </div>
        </div>
        
        <h1 style={{marginTop: '60px'}}>Achievements & Recognition</h1>
        <div className="projects-grid">
            <div className="achievement-card">
                <div className="card-header">
                    <FontAwesomeIcon icon={faTrophy} size="3x" color="#FFD700"/>
                </div>
                <h2>DUCTF 2024 Champion</h2>
                <div className="achievement-badge">🏆 1st Place</div>
                <p>Secured first place in the prestigious annual programming competition DUCTF 2024, demonstrating exceptional problem-solving skills and algorithmic thinking under competitive pressure.</p>
            </div>
            
            <div className="achievement-card">
                <div className="card-header">
                    <FontAwesomeIcon icon={faMedal} size="3x" color="#E6E6FA"/>
                </div>
                <h2>Battle of Brains 2024 Runner Up</h2>
                <div className="achievement-badge">🥈 2nd Place</div>
                <p>Achieved second place in Battle of Brains 2024, a prestigious coding competition, showcasing consistent performance in competitive programming environments.</p>
            </div>
            
            <div className="achievement-card">
                <div className="card-header">
                    <FontAwesomeIcon icon={faStar} size="3x" color="#FFA726"/>
                    <a href="https://codeforces.com/profile/m_ithunvoe" target="_blank" rel="noreferrer">
                        <span className="cf-link">CF Profile</span>
                    </a>
                </div>
                <a href="https://codeforces.com/profile/m_ithunvoe" target="_blank" rel="noreferrer"><h2>Competitive Programming Excellence</h2></a>
                <div className="achievement-badge">Expert Rating (1672)</div>
                <p>Achieved Expert rating (1672) on Codeforces and 4-star rating on CodeChef. Solved over 1500 algorithmic problems and participated in over 15 national programming contests including ICPC regional rounds.</p>
            </div>
            
            <div className="achievement-card">
                <div className="card-header">
                    <FontAwesomeIcon icon={faUsers} size="3x" color="#66BB6A"/>
                </div>
                <h2>Leadership Roles</h2>
                <div className="achievement-badge">Team Leader</div>
                <p>Vice President of Josephite Math Club (JMC) leading a team of 30+ students, and Executive Committee Member at CSEDU Informatics Club organizing programming contests and hackathons.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;