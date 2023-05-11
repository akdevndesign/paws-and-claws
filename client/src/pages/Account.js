import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import { Container, Row, Col, Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';

export default function Account() {
  return (
    <section className="account-forms">
      <Container fluid>
        <Row className="align-items-center signup">
          <Col xs={10} className="mx-auto">
            <Form className="login-form row">
              <h1 className="text-center">Paws and Claws</h1>
              <Col xs={4} className="mt-5">
                <h3 className="text-center mb-5">Account Information</h3>
                <Col xs={8} className="mx-auto">
                  <Form.Group className="mb-4" controlId="username">
                    <Form.Control type="text" placeholder="Username" />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="email">
                    <Form.Control type="email" placeholder="user@email.com" />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="password">
                    <Form.Control type="password" placeholder="*********" />
                  </Form.Group>
                </Col>
              </Col>
              <Col xs={4} className="mt-5">
                <Col xs={8} className="mx-auto">
                  <Form.Group className="mb-4" controlId="phone">
                    <Form.Control type="text" placeholder="(999) 555-1111" />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="address">
                    <Form.Control type="text" placeholder="1111 main st, city" />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="stateZip">
                    <Form.Control type="text" placeholder="State, ZIP" />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="petExperience">
                    <Form.Control type="text" placeholder="Pet Experience" />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="otherPets">
                    <Form.Control type="text" placeholder="Other Pets" />
                  </Form.Group>
                </Col>
              </Col>
              <Col xs={4} className="mt-5">
                <Col xs={12} className="mb-4 mt-5">
                  <DropdownButton id="dropdown" title="Residence type" variant="secondary">
                    <Dropdown.Item href="#">House</Dropdown.Item>
                    <Dropdown.Item href="#">Town House</Dropdown.Item>
                    <Dropdown.Item href="#">Apartment</Dropdown.Item>
                  </DropdownButton>
                </Col>
                <Col xs={12} className="mb-4">
                  <DropdownButton id="dropdown" title="Yard Size" variant="secondary">
                    <Dropdown.Item href="#">0.05 acre</Dropdown.Item>
                    <Dropdown.Item href="#">0.01-0.25 acre</Dropdown.Item>
                    <Dropdown.Item href="#">0.5 acre+</Dropdown.Item>
                  </DropdownButton>
                </Col>
                <Col xs={12} className="mb-4">
                  <DropdownButton id="dropdown" title="Children" variant="secondary">
                    <Dropdown.Item href="#">0</Dropdown.Item>
                    <Dropdown.Item href="#">1-2</Dropdown.Item>
                    <Dropdown.Item href="#">3+</Dropdown.Item>
                  </DropdownButton>
                </Col>
                <Col xs={12} className="mb-4">
                  <DropdownButton id="dropdown" title="Children Ages" variant="secondary">
                    <Dropdown.Item href="#">1</Dropdown.Item>
                    <Dropdown.Item href="#">1-2</Dropdown.Item>
                    <Dropdown.Item href="#">3+</Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Col>
              <div className="text-center mt-5">
                <Button variant="primary" type="submit" block id="signup-btn">
                  Signup
                </Button>
                <p className="mt-3 mb-0 text-center">
                  Already have an account? <Link
                  to={"/login"}
                >
                  Login
                </Link>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}