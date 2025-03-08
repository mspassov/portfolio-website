import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>Made with ❤️ by Martin</p>
        <div className="copyright">
          &copy; {currentYear} Martin Development. All rights reserved.
        </div>
        <div className="page-source">
          <FaGithub className="link" />
          <a
            href="https://github.com/mspassov/portfolio-website"
            className="link"
            target="_blank"
          >
            Website Source Code
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
