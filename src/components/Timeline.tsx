import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Researcher</h3>
            <h4 className="vertical-timeline-element-subtitle">Sociofi Technology</h4>
            <p>
              Conducting research and development in frontend technologies and user interface design. Contributing to innovative web and mobile frontend solutions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2023 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Math and Programming Annotator</h3>
            <h4 className="vertical-timeline-element-subtitle">GenMorphics AI Solutions, SuperAnnotate</h4>
            <p>
              Contributing as a Math and Python Programming Annotator for prominent AI platforms. Ensuring high-quality annotations and precise data labeling for machine learning systems.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2022 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Competitive Programmer & CP Trainer</h3>
            <h4 className="vertical-timeline-element-subtitle">CSEDU Informatics Club</h4>
            <p>
              Solved over 1500 algorithmic problems on platforms such as Codeforces, CodeChef, and AtCoder. Serving as a CP Trainer at CSEDU Informatics Club, mentoring junior students.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Academic Team Member</h3>
            <h4 className="vertical-timeline-element-subtitle">Bangladesh Mathematical Olympiad (BdMO)</h4>
            <p>
              Designing problems for competitions and contributing to mathematical education in Bangladesh.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;