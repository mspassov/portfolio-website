import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const user = "martispassov";
  const domain = "gmail.com";
  const email = user + "@" + domain;

  return (
    <section className="contact" id="contact">
      <div className="container contact-container">
        <div className="contact-text">
          <h1>Contact Me</h1>
          <p>Let's Chat! 😊</p>
        </div>
        <div className="contact-icons-container">
          <div className="contact-icons">
            <FaEnvelope className="contact-icon" />
            <a className="link" href={`mailto:${email}`}>
              Email
            </a>
          </div>
          <div className="contact-icons">
            <FaLinkedin className="contact-icon" />
            <a
              className="link"
              target="_blank"
              href="https://www.linkedin.com/in/mspassov"
            >
              LinkedIn
            </a>
          </div>
          <div className="contact-icons">
            <FaGithub className="contact-icon" />
            <a
              className="link"
              target="_blank"
              href="https://github.com/mspassov"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
