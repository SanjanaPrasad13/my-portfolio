import React from 'react';
import { ReactComponent as LinkedInIcon } from './icons/linkedin.svg'; 
import { ReactComponent as GmailIcon } from './icons/gmail.svg';
import { ReactComponent as GitHubIcon } from './icons/github.svg';
import '../components/css/ContactPage.css';

export default function ContactPage() {
  return (
    
        <div className="contact-container">
            <h2>Get in touch </h2>
        <p>I'd love to hear from you! Here's how you can reach me...</p>
        <div className="contact-icons">
                <a href="https://www.linkedin.com/in/sanjanagadagoju/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
                <a href="mailto:sanjanagadagoju@gmail.com">
                    <GmailIcon />
                </a>
                <a href="https://github.com/SanjanaPrasad13" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </a>
        </div>
        </div>
   
  );
}

