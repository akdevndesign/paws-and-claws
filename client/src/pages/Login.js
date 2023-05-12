import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

export default function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };
  //control component
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <section className="login application-forms">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={6} className="login-side">
            <div className="col-8 mx-auto">
              <form onSubmit={handleFormSubmit}>
                <div className="flex-row space-between my-2">
                  <label htmlFor="email">Email address:</label>
                  <input
                    placeholder="youremail@test.com"
                    name="email"
                    type="email"
                    id="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-row space-between my-2">
                  <label htmlFor="pwd">Password:</label>
                  <input
                    placeholder="******"
                    name="password"
                    type="password"
                    id="pwd"
                    onChange={handleChange}
                  />
                </div>
                {error ? (
                  <div>
                    <p className="error-text">
                      The provided credentials are incorrect
                    </p>
                  </div>
                ) : null}
                <div className="flex-row flex-end">
                  <button type="submit">Submit</button>
                </div>
              </form>

              {/* <Form className="login-form">
                                <h1 className="text-center">Paws and Claws</h1>
                                <h3 className="text-center">Login</h3>
                                <div className="col-8 mx-auto">
                                    <Form.Group controlId="formBasicEmail" className="mt-4 mb-4">
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword" className="mt-4 mb-4">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <div className="text-center mt-5">
                                        <Button variant="primary" type="submit" className="btn-block" id="login-btn">
                                            Login
                                        </Button>
                                    </div>
                                </div>
                            </Form> */}
            </div>
          </Col>
          <Col md={6} className="d-flex">
            <div className="col-8 mx-auto text-center info-side">
              <h2>
                A pet can help reduce stress and improve your mental health!
              </h2>
              <p>
                Pets, especially dogs and cats, can offer emotional support and
                become loyal and affectionate companions, which can improve
                overall well-being and reduce stress and anxiety levels.
                Additionally, pets can encourage owners to be more active,
                through daily walks and playtime, which can promote physical
                health and a sense of routine.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
