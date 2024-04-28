import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sandeep Dhamala </span>
            from <span className="purple"> Jhapa, Nepal.</span>
            <br />
            I am currently employed as a NOC Engineer at CGNET.
            <br />
           With a robust skill set encompassing technical expertise, outstanding customer service, web design, coding, and network operations, I ensure seamless performance and customer satisfaction.
            <br />
            <br />
            Apart from ISP, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Happy Coding
            </li>
              <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive for excellence without waiting for the fruits of your efforts."{" "}
          </p>
          <footer className="blockquote-footer">Sandeep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
