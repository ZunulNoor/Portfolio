import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Zun Ul Noor </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />
            I am working as a Freelancer.
            <br />
            I am currently pursuing a Bachelor's degree in Computer Science from the Federal Urdu University of Arts, Science, and Technology (FUUAST).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Going on outings
            </li>
          </ul>


          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Zun Ul Noor</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
