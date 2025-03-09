import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCity,
  FaCalendarAlt,
  FaCheck,
  FaUsers,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";

const page = () => {
  return (
    <section className="experience-details">
      <div className="container">
        <Link href="/#experience" className="link">
          <div className="back-container">
            <FaRegArrowAltCircleLeft className="back-icon" />
            Back to Experiences
          </div>
        </Link>
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
                <strong>Client: </strong>Big 5 Canadian Bank
              </p>
            </div>
            <div className="quick-details">
              <FaCalendarAlt className="details-icon" />
              <p>
                <strong>Date of Project: </strong>2021 - 2022
              </p>
            </div>
            <p>
              <strong>Highlights</strong>
            </p>
            <ul className="details-highlights">
              <li>
                Supported the wires modernization program for a big 5 Canadian
                bank, by working in cross-functional pods, to conduct
                requirements gathering and backlog grooming
              </li>
              <li>
                Single-handedly led working sessions between the client, the
                vendor, and the development team to understand client needs,
                feasibility, and current processes
              </li>
              <li>
                Owned the full final technical solution, by writing
                documentation, creating data flow & sequence diagrams, and
                writing the technical specifications for the APIs
              </li>
              <li>
                Very closely collaborated with the engineering, QA and Solution
                Architect teams to brainstorm ideas, evaluate options, and
                answer open questions
              </li>
              <li>
                Efforts resulted in the first phase of the wire payment system
                to be successfully deployed, automating legacy processes, and
                modernizing the bank’s infrastructure
              </li>
            </ul>
            <div className="skills-summary">
              <p className="skills-title">
                <strong>Key Skills</strong>
              </p>
              <ul className="skills-list">
                <li>
                  <FaCheck className="checkmark" />
                  <p>Requirements Gathering</p>
                </li>
                <li>
                  <FaCheck className="checkmark" />
                  <p>Technical Diagramming</p>
                </li>
                <li>
                  <FaCheck className="checkmark" />
                  <p>Stakeholder Management</p>
                </li>
                <li>
                  <FaCheck className="checkmark" />
                  <p>Backlog Refinement</p>
                </li>
                <li>
                  <FaCheck className="checkmark" />
                  <p>Feasibility Studies</p>
                </li>
                <li>
                  <FaCheck className="checkmark" />
                  <p>Agile Methodology</p>
                </li>
                <li>
                  <FaCheck className="checkmark" />
                  <p>System Design</p>
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
