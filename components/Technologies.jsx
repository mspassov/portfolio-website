import React from "react";
import Image from "next/image";
import technologies from "@/data/technologies.json";
import productTools from "@/data/productTools.json";

const Technologies = () => {
  return (
    <>
      <section className="section tools">
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

      <section className="section tools">
        <div className="container">
          <h2>Product Tools</h2>
          <div className="grid-second-container">
            {productTools.map((item, index) => (
              <div className="grid-item" key={index}>
                <div
                  className="img-section"
                  style={{ "background-color": `${item.color}` }}
                >
                  <Image
                    className={index == 0 || index == 4 ? "override-img" : ""}
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
