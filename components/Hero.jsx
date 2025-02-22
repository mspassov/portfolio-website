import React from "react";
import Image from "next/image";
import headshot from "@/assets/images/headshot.jpg";
import flagCA from "@/assets/images/ca-flag.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="text-content">
          <h1>
            Hi, I'm Martin! <span className="wave-emoji">👋</span>
          </h1>
          <p className="text-summary">
            Technical Product Manager with 5+ years of experience in the
            E-Commerce and Financial Services industries. React and NextJS
            developer on the side.
          </p>
          <div className="location-container">
            <Image src={flagCA} alt="Canadian Flag" width={30} />
            <p>
              <strong>Toronto, Canada</strong>
            </p>
          </div>

          <button className="btn">
            <Link href="#contact" className="link" id="hero-btn">
              Let's Chat!
            </Link>
          </button>
        </div>

        <div className="image-content">
          <Image
            className="headshot-img"
            src={headshot}
            alt="Image of Martin"
            width={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
