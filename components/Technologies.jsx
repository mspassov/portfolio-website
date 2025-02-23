import React from "react";
import Image from "next/image";
import technologies from "@/data/technologies.json";

const Technologies = () => {
  return (
    <>
      <section className="section technologies">
        <div className="container">
          <h2>Technologies</h2>
          <div className="grid-container">
            {technologies.map((item, index) => (
              <div className="grid-item" key={index}>
                <div
                  className="img-section"
                  style={{ "background-color": `${item.color}` }}
                >
                  <Image
                    src={item.icon}
                    width={50}
                    height={50}
                    alt={`${item.title}`}
                  />
                </div>
                <div className="text-section">
                  <div className="title">{item.title}</div>
                  <div className="secondary-title">{item.secondary}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section technologies">
        <div className="container">
          <h2>Technologies</h2>
          <div className="grid-container">
            {technologies.map((item, index) => (
              <div className="grid-item" key={index}>
                <div
                  className="img-section"
                  style={{ "background-color": `${item.color}` }}
                >
                  <Image
                    src={item.icon}
                    width={50}
                    height={50}
                    alt={`${item.title}`}
                  />
                </div>
                <div className="text-section">
                  <div className="title">{item.title}</div>
                  <div className="secondary-title">{item.secondary}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
