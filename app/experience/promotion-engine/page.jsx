import React from "react";
import Image from "next/image";
import { FaCity, FaCalendarAlt, FaCheck, FaUsers } from "react-icons/fa";

const page = () => {
  return (
    <section className="experience-details">
      <div className="container">
        <div className="details-flex">
          <div className="details-content">
            <h2>Promotion Engine Microservice</h2>
            <div className="quick-details">
              <FaCity className="details-icon" />
              <p>
                <strong>Company: </strong> Deloitte
              </p>
            </div>
            <div className="quick-details">
              <FaUsers className="details-icon" />
              <p>
                <strong>Client: </strong>Major Canadian Retailer
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
                Oversaw the development of a Promotions engine microservice, as
                part of a new microservice-based e-commerce platform
                implementation
              </li>
              <li>
                Hosted discovery sessions with key stakeholders across the
                organization to understand how promotions are created in the
                back-end and created a strategic vision for building an in-house
                tool to replace the legacy SAP system
              </li>
              <li>
                Designed an updated system for cross-functionally publishing
                promotions across any of the client’s e-commerce stores by
                translating requirements into user stories, devising an updated
                user journey, and working with a team of designers to devise
                wireframes
              </li>
              <li>
                Handled all project management aspects of the software
                development lifecycle, including prioritizing scope, preparing
                sprints, and closely collaborating with the engineering team
              </li>
              <li>
                Supported the technical implementation by defining the data
                models for promotions, informing the design of the APIs between
                front-end and back-end systems, and using Postman to QA the
                various endpoints
              </li>
              <li>
                Efforts resulted in a seamless migration to the new e-commerce
                platform, with zero interruptions to the end-user experience.
                Furthermore, all promotion types are now supported across all of
                the client’s e-commerce stores
              </li>
            </ul>
            <div className="skills-summary">
              <p className="skills-title">
                <strong>Key Skills</strong>
              </p>
              <ul className="skills-list">
                <li>
                  <FaCheck className="checkmark" />
                  <p>Project Management</p>
                </li>
                <li>
                  <FaCheck className="checkmark" />
                  <p>User Interviews</p>
                </li>
                <li>
                  <FaCheck className="checkmark" />
                  <p>Requirements Gathering</p>
                </li>
                <li>
                  <FaCheck className="checkmark" />
                  <p>Product Briefs</p>
                </li>
                <li>
                  <FaCheck className="checkmark" />
                  <p>API Testing (Postman)</p>
                </li>
                <li>
                  <FaCheck className="checkmark" />
                  <p>MVP Iterations</p>
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
