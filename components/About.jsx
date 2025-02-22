import React from "react";
import Image from "next/image";
import softwareImg from "@/assets/images/software-img.png";
import { FaRocket, FaCode, FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-container">
          <h2>About Me</h2>
          <div className="about-flex">
            <div className="image-section">
              <Image
                className="about-img"
                alt="Software Image"
                src={softwareImg}
                width={450}
              />
            </div>
            <div className="text-section">
              <div className="bullet-container first-bullet">
                <FaRocket className="about-bullet-icon" />
                <div className="bullet-text-container">
                  <h3>Technical Product Manager</h3>
                  <p>
                    Extensive experience across the entire product development
                    lifecycle, from strategic decision-making to collaborating
                    cross-functionally with stakeholders
                  </p>
                </div>
              </div>
              <div className="bullet-container second-bullet">
                <FaCode className="about-bullet-icon" />
                <div className="bullet-text-container">
                  <h3>Full-Stack Developer</h3>
                  <p>
                    Specialize in NextJS (React) and the MERN stack to build
                    scalable web-applications that delight users and drive
                    business impact
                  </p>
                </div>
              </div>
              <div className="bullet-container">
                <FaGraduationCap className="about-bullet-icon" />
                <div className="bullet-text-container">
                  <h3>Lifelong Learner</h3>
                  <p>
                    Computer Science and Business graduate. Always
                    pursuing new learning opportunities to develop my Product
                    and Technical craft
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
