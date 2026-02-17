import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate, useLocation } from 'react-router-dom';

const pageOrder = [
  "/",          // Home
  "/about",
  "/skills",
  "/experience",
  "/projects",
  "/certifications",
  "/contact"
];

export default function Contact() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const idx = pageOrder.indexOf(currentPath);
  const validIndex = idx === -1 ? 0 : idx;
  const prevPath = validIndex > 0 ? pageOrder[validIndex - 1] : pageOrder[pageOrder.length - 1];
  const nextPath = validIndex < pageOrder.length - 1 ? pageOrder[validIndex + 1] : pageOrder[0];

  const formRef = useRef();
  const [status, setStatus] = useState('');

  function handleSend(e) {
    e.preventDefault();
    setStatus('Sending...');
    emailjs.sendForm(
      'service_g3h2ivl',    // <-- replace with your EmailJS Service ID
      'template_eecykb6',   // <-- replace with your EmailJS Template ID
      formRef.current,
      '083cMvfSm4ddps-Ns'         // <-- replace with your EmailJS Public Key
    ).then(() => {
      setStatus('Message sent!');
      setTimeout(() => setStatus(''), 3000);
      formRef.current.reset();
    }, () => {
      setStatus('Failed to send message.');
      setTimeout(() => setStatus(''), 3000);
    });
  }

  return (
    <section id="contact" className="contact fullpage hero-content-animated">
      <div className="contact-floating-box">
        <h2>Contact</h2>
        <form ref={formRef} onSubmit={handleSend} autoComplete="off">
          <input name="user_name" type="text" placeholder="Your Name" required />
          <input name="user_email" type="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows={4} required />
          <button type="submit">Send Message</button>
        </form>
        {status && <div className="contact-status">{status}</div>}
        <div className="contact-icons">
          <a href="tel:9063006876" aria-label="Phone"><i className="fa fa-phone"></i></a>
          <a href="mailto:kavyareddymandi21@gmail.com" aria-label="Email"><i className="fa fa-envelope"></i></a>
          <a href="https://instagram.com/kaav_yuh" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa fa-instagram"></i></a>
          <a href="https://x.com/kavyax" target="_blank" rel="noopener noreferrer" aria-label="X"><i className="fa fa-twitter"></i></a>
        </div>
        <div className="contact-plain">
          <span>Phone: 90630 06876</span>
          <span>Email: kavyareddymandi21@gmail.com</span>
        </div>
      </div>
       <div className="arrow-navigation">
        <button className="arrow-btn left" onClick={() => navigate(prevPath)} aria-label="Previous page">
          &#8592;
        </button>
        <button className="arrow-btn right" onClick={() => navigate(nextPath)} aria-label="Next page">
          &#8594;
        </button>
      </div>
    </section>
  );
}
