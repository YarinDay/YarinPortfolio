import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yarin Dayan </span>
            from <span className="purple"> Rishon Lezion, Israel.</span>
            <br />I am a Full-stack Developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Spend Time With My Family
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never stop Learning!"{" "}
          </p>
          <footer className="blockquote-footer">Yarin Dayan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
