import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */

    // if (name !== '' && email !== '' && message !== '') {
    //   var templateParams = {
    //     name: name,
    //     email: email,
    //     message: message
    //   };

    //   console.log(templateParams);
    //   emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );
    //   setName('');
    //   setEmail('');
    //   setMessage('');
    // }
  };

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