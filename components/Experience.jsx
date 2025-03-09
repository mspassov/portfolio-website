import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCity, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <>
      <section className="experience" id="experience">
        <div className="container">
          <h2>Product Management Experience</h2>
          <div className="experience-flex">
            <div className="experience-card">
              <div className="card-image-container">
                <Image
                  src="/postPurchase.png"
                  width={350}
                  height={0}
                  alt="post-purchase platform"
                  className="card-image"
                />
              </div>
              <div className="card-text">
                <h3>Post-Purchase Platform</h3>
                <div className="card-details">
                  <FaCity className="details-icon" />
                  <p>
                    <strong>Company: </strong>Passport Global
                  </p>
                </div>
                <div className="card-details">
                  <FaCalendarAlt className="details-icon" />
                  <p>
                    <strong>Date: </strong>2023 - 2024
                  </p>
                </div>
                <p>
                  A product designed to improve the post-checkout experience for
                  international customers, waiting for their e-commerce order to
                  arrive
                </p>
                <Link
                  href="/experience/post-purchase-platform"
                  className="link"
                  id="details-link"
                >
                  <div className="btn">Details</div>
                </Link>
              </div>
            </div>
            <div className="experience-card">
              <div className="card-image-container">
                <Image
                  src="/promotion.png"
                  width={350}
                  height={0}
                  alt="e-commerce promotion"
                  className="card-image"
                />
              </div>
              <div className="card-text">
                <h3>Promotion Engine Microservice</h3>
                <div className="card-details">
                  <FaCity className="details-icon" />
                  <p>
                    <strong>Company: </strong>Deloitte
                  </p>
                </div>
                <div className="card-details">
                  <FaCalendarAlt className="details-icon" />
                  <p>
                    <strong>Date: </strong>2022 - 2023
                  </p>
                </div>
                <p>
                  An e-commerce microservice, enabling better promotion
                  creation, and more flexible options across the client's suite
                  of online stores
                </p>
                <Link
                  href="/experience/promotion-engine"
                  className="link"
                  id="details-link"
                >
                  <div className="btn">Details</div>
                </Link>
              </div>
            </div>
            <div className="experience-card">
              <div className="card-image-container">
                <Image
                  src="/banking.png"
                  width={350}
                  height={0}
                  alt="banking application"
                  className="card-image"
                />
              </div>
              <div className="card-text">
                <h3>Wire Payment System</h3>
                <div className="card-details">
                  <FaCity className="details-icon" />
                  <p>
                    <strong>Company: </strong>Deloitte
                  </p>
                </div>
                <div className="card-details">
                  <FaCalendarAlt className="details-icon" />
                  <p>
                    <strong>Date: </strong>2021 - 2022
                  </p>
                </div>
                <p>
                  A modernization initiative, transitioning and upgrading a
                  bank’s legacy wire payment system into a new, cloud-based
                  solution
                </p>
                <Link
                  href="/experience/wire-payment-system"
                  className="link"
                  id="details-link"
                >
                  <div className="btn">Details</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience projects" id="projects">
        <div className="container">
          <h2>Web Development Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="left-img">
                <a
                  href="https://property-pulse-nextjs-ten.vercel.app/"
                  target="_blank"
                  className="link"
                >
                  <Image
                    src="/propertyPulseImg.png"
                    alt="test-for-now"
                    width={350}
                    height={0}
                    className="project-img"
                  />
                </a>
              </div>
              <div className="right-text">
                <h3>PropertyPulse</h3>
                <p>
                  An online marketplace for finding a rental. Full stack
                  application with Airbnb-like functionality
                </p>
                <div className="tech-stack-flex">
                  <div className="tech-pill">NextJS</div>
                  <div className="tech-pill">Tailwind</div>
                  <div className="tech-pill">Google OAuth</div>
                  <div className="tech-pill">Cloudinary</div>
                </div>
                <div className="project-details-flex">
                  <a
                    href="https://github.com/mspassov/property-pulse-nextjs"
                    target="_blank"
                    className="link"
                  >
                    <div className="source-btn project-btn">Source </div>
                  </a>
                  <a
                    href="https://property-pulse-nextjs-ten.vercel.app/"
                    target="_blank"
                    className="link"
                  >
                    <div className="demo-btn project-btn">Demo</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="left-img">
                <a
                  href="https://flixx-movie-db.netlify.app/"
                  target="_blank"
                  className="link"
                >
                  <Image
                    src="/flixxImg.png"
                    alt="test-for-now"
                    width={350}
                    height={0}
                    className="project-img"
                  />
                </a>
              </div>
              <div className="right-text">
                <h3>Flixx Movies</h3>
                <p>
                  An application to help users decide what to watch next. Uses
                  the MovieDB API to fetch the latest releases
                </p>
                <div className="tech-stack-flex">
                  <div className="tech-pill">HTML</div>
                  <div className="tech-pill">CSS</div>
                  <div className="tech-pill">JavaScript</div>
                </div>
                <div className="project-details-flex">
                  <a
                    href="https://github.com/mspassov/the-movie-DB"
                    target="_blank"
                    className="link"
                  >
                    <div className="source-btn project-btn">Source </div>
                  </a>
                  <a
                    href="https://flixx-movie-db.netlify.app/"
                    target="_blank"
                    className="link"
                  >
                    <div className="demo-btn project-btn">Demo</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="left-img">
                <a
                  href="https://crypto-squared.netlify.app/"
                  target="_blank"
                  className="link"
                >
                  <Image
                    src="/cryptosquared.png"
                    alt="test-for-now"
                    width={350}
                    height={0}
                    className="project-img"
                  />
                </a>
              </div>
              <div className="right-text">
                <h3>CryptoSquared</h3>
                <p>
                  FinTech dashboard for tracking price movements of all major
                  crypto currencies, and performing financial crypto research
                </p>
                <div className="tech-stack-flex">
                  <div className="tech-pill">React</div>
                  <div className="tech-pill">Redux</div>
                  <div className="tech-pill">Ant Design</div>
                </div>
                <div className="project-details-flex">
                  <a
                    href="https://github.com/mspassov/Crypto-Squared"
                    target="_blank"
                    className="link"
                  >
                    <div className="source-btn project-btn">Source </div>
                  </a>
                  <a
                    href="https://crypto-squared.netlify.app/"
                    target="_blank"
                    className="link"
                  >
                    <div className="demo-btn project-btn">Demo</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="left-img">
                <a
                  href="https://pocket-world.netlify.app/"
                  target="_blank"
                  className="link"
                >
                  <Image
                    src="/pocketworld.png"
                    alt="test-for-now"
                    width={350}
                    height={0}
                    className="project-img"
                  />
                </a>
              </div>
              <div className="right-text">
                <h3>Pocket World</h3>
                <p>
                  A tool for Foodies – provides information on all restaurants
                  around you. Uses the Google Maps and Yelp API to fetch results
                </p>
                <div className="tech-stack-flex">
                  <div className="tech-pill">React</div>
                  <div className="tech-pill">RapidAPI</div>
                </div>
                <div className="project-details-flex">
                  <a
                    href="https://github.com/mspassov/Pocket-World"
                    target="_blank"
                    className="link"
                  >
                    <div className="source-btn project-btn">Source </div>
                  </a>
                  <a
                    href="https://pocket-world.netlify.app/"
                    target="_blank"
                    className="link"
                  >
                    <div className="demo-btn project-btn">Demo</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
