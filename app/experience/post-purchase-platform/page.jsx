import React from "react";
import Image from "next/image";
import { FaCity, FaCalendarAlt, FaCheck } from "react-icons/fa";

const page = () => {
  return (
    <section className="experience-details">
      <div className="container">
        <div className="details-flex">
          <div className="details-content">
            <h2>Passport's Post-Purchase Platform</h2>
            <div className="quick-details">
              <FaCity className="details-icon" />
              <p>
                <strong>Company: </strong>Passport Global
              </p>
            </div>
            <div className="quick-details">
              <FaCalendarAlt className="details-icon" />
              <p>
                <strong>Date of Project: </strong>2023 - 2024
              </p>
            </div>
            <p>
              <strong>Highlights</strong>
            </p>
            <ul className="details-highlights">
              <li>
                Significantly improved Passport’s parcel tracking system by
                defining the product strategy, prioritizing scope, and owning
                the entire long-term roadmap; Passport's tracking system is used
                by 1300+ merchants, improving operational efficiency and
                providing end-users with real-time updates
              </li>
              <li>
                Iterated on Passport’s Post-Purchase platform to build 0 to 1
                features, by researching market gaps, conducting client
                interviews, and collecting quantitative data. Findings were
                used to roll-out key features including: localized marketing, a
                Shopify recommendation engine, and a better package tracking
                experience
              </li>
              <li>
                Introduced analytics to the Post-Purchase user journey, in
                order to collect detailed user data, and apply a data-driven
                approach to roadmap planning
              </li>
            </ul>
            <div className="skills-summary">
              <p className="skills-title">
                <strong>Key Skills</strong>
              </p>
              <ul className="skills-list">
                <li>
                  <FaCheck className="checkmark" />
                  <p>Roadmapping</p>
                </li>
                <li>
                  <FaCheck className="checkmark" />
                  <p>Cross-Functional Collaboration</p>
                </li>
                <li>
                  <FaCheck className="checkmark" />
                  <p>Design Iterations</p>
                </li>
                <li>
                  <FaCheck className="checkmark" />
                  <p>Data Analytics</p>
                </li>
                <li>
                  <FaCheck className="checkmark" />
                  <p>Agile Methodology</p>
                </li>
                <li>
                  <FaCheck className="checkmark" />
                  <p>Requirements Gathering</p>
                </li>
                <li>
                  <FaCheck className="checkmark" />
                  <p>Scope Prioritization</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
