import React from 'react';
import '../assets/styles/Contact.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Interested in collaborating on Flutter projects, competitive programming, or research opportunities? Let's connect!</p>
          <div className="contact-info" style={{marginBottom: '20px', textAlign: 'left'}}>
            <p><strong>Email:</strong> kabyasaha1812@gmail.com</p>
            <p><strong>Phone:</strong> +8801303359281</p>
            <p><strong>Location:</strong> Dhaka, Bangladesh</p>
          </div>
          
          {/* Social Media Links */}
          <div className="social-links" style={{textAlign: 'center', marginTop: '30px', marginBottom: '20px'}}>
            <a href="https://github.com/mithunvoe" target="_blank" rel="noreferrer">
              <GitHubIcon style={{fontSize: '2rem', margin: '0 15px', color: '#333'}}/>
            </a>
            <a href="https://www.linkedin.com/in/kabya-mithun-saha-b313a2249/" target="_blank" rel="noreferrer">
              <LinkedInIcon style={{fontSize: '2rem', margin: '0 15px', color: '#0077b5'}}/>
            </a>
          </div>
          
          {/* Footer Content */}
          <div className="contact-footer" style={{textAlign: 'center', marginTop: '40px', paddingTop: '30px', borderTop: '1px solid #e0e0e0'}}>
            <p style={{fontSize: '0.9rem', color: '#666', margin: '0'}}>
              A portfolio designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Kabya Mithun Saha</a> with 💜
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;