import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCity, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <>
      <section className="experience">
        <div className="container">
          <h2>Product Management Experience</h2>
          <div className="experience-flex">
            <div className="experience-card">
              <div className="card-image-container">
                <Image
                  src="/postPurchase.png"
                  width={350}
                  height={0}
                  alt="ecommerce promotion"
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus, similique.
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
                  src="/promotionImage.png"
                  width={350}
                  height={0}
                  alt="ecommerce promotion"
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus, similique.
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
                  alt="ecommerce promotion"
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus, similique.
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

      <section className="experience">
        <div className="container">
          <h2>Web Development Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="left-img">
                <Image
                  src="/postPurchase.png"
                  alt="test-for-now"
                  width={250}
                  height={0}
                  className="project-img"
                />
              </div>
              <div className="right-text">
                <h3>PropertyPulse</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quisquam, vitae!
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="left-img">
                <Image
                  src="/postPurchase.png"
                  alt="test-for-now"
                  width={250}
                  height={0}
                  className="project-img"
                />
              </div>
              <div className="right-text">
                <h3>PropertyPulse</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quisquam, vitae!
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="left-img">
                <Image
                  src="/postPurchase.png"
                  alt="test-for-now"
                  width={250}
                  height={0}
                  className="project-img"
                />
              </div>
              <div className="right-text">
                <h3>PropertyPulse</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quisquam, vitae!
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="left-img">
                <Image
                  src="/postPurchase.png"
                  alt="test-for-now"
                  width={250}
                  height={0}
                  className="project-img"
                />
              </div>
              <div className="right-text">
                <h3>PropertyPulse</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quisquam, vitae!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
