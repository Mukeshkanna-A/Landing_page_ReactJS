import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "../styled/about.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";

function About() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <div>
        <Container fluid>
          <div className="contactForm_title">About Us</div>
          <hr></hr>
          <div className="about_body" style={{ padding: "3rem" }}>
            <Card
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "5rem",
                fontSize: "1rem",
                fontWeight: "bold",
                margin: "1rem",
              }}
            >
              <Card.Body>
                <Card.Text style={{ padding: "1rem" }}>
                  "We stay at the forefront of design and technology trends to
                  deliver cutting-edge solutions that leave a lasting
                  impression."
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default About;
