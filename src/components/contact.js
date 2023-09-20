import React from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../styled/contact.css";

function FormGroup() {
  return (
    <div>
      <div className="contactForm_title">Contact</div><hr></hr>
      <div className="card_body">
        <Card
          border="primary"
          style={{ width: "30rem" }}
          className="form_content"
        >
          <Card.Header className="text-center" style={{ fontSize: '1rem',fontWeight:'bold' }}>
            Sign in
          </Card.Header>
          <Card.Body>
            <>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
            </>
            <Form.Group
              as={Row}
              className="mb-3 mt-3"
              controlId="formHorizontalCheck"
            >
              <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label="Remember me" />
              </Col>
            </Form.Group>
          </Card.Body>
          <div className="text-center">
            <Button
              variant="primary"
              className="mb-3"
              style={{ width: "10rem" }}
            >
              Submit
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default FormGroup;
