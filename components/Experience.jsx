import React from "react";
import Image from "next/image";

const Experience = () => {
  return (
    <section className="experience">
      <div className="container">
        <h2>Product Management Experience</h2>
        <div className="experience-flex">
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
              <h3>Post-Purchase Platform</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, similique.
              </p>
            </div>
          </div>
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
              <h3>Promotion Engine Microservice</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, similique.
              </p>
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, similique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
