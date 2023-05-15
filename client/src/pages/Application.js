import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";

const SUBMIT_APPLICATION_MUTATION = gql`
  mutation SubmitApplication($petId: ID!, $application: String!) {
    submitApplication(petId: $petId, application: $application) {
      name
      applications
    }
  }
`;

export default function Application() {
  const { petId } = useParams();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [stateZip, setStateZip] = useState("");
  const [petExperience, setPetExperience] = useState("");
  const [otherPets, setOtherPets] = useState("");
  const [residenceType, setResidenceType] = useState("");
  const [yardSize, setYardSize] = useState("");
  const [numChildren, setNumChildren] = useState("");
  const [childrenAges, setChildrenAges] = useState("");

  const [submitApplication] = useMutation(SUBMIT_APPLICATION_MUTATION);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const applicationData = {
      email,
      phone,
      address,
      stateZip,
      petExperience,
      otherPets,
      residenceType,
      yardSize,
      numChildren,
      childrenAges,
    };

    try {
      await submitApplication({
        variables: {
          petId,
          application: JSON.stringify(applicationData),
        },
      });
      console.log("application data ",applicationData)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="application-forms">
      <Container fluid>
        <Row className="align-items-center signup">
          <Col md={10} className="mx-auto">
            <Form className="login-form row" onSubmit={handleSubmit}>
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/dusaigbyn/image/upload/c_thumb,w_200,g_face/v1683762073/Paws_n_claws_logo_FINAL_2_ssuyp7.png"
                  alt="Paws and Claws"
                  className="logo-form"
                />
              </Link>
              <h3 className="text-center">Adoption Application</h3>
              <Col xs={12} lg={4} className="mt-5">
                <Col xs={12} className="mx-auto">
                  <h4>Email</h4>
                  <Form.Group className="mb-4" controlId="email">
                    <Form.Control
                      type="email"
                      placeholder="user@email.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </Form.Group>
                  <h4>Phone Number</h4>
                  <Form.Group className="mb-4" controlId="phone">
                    <Form.Control
                      type="text"
                      placeholder="(999) 555-1111"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </Form.Group>
                  <h4>Address</h4>
                  <Form.Group className="mb-4" controlId="address">
                    <Form.Control
                      type="text"
                      placeholder="1111 Main St, City"
                      value={address}
                      onChange={(event) => setAddress(event.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="stateZip">
                    <Form.Control
                      type="text"
                      placeholder="State, ZIP"
                      value={stateZip}
                      onChange={(event) => setStateZip(event.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Col>
              <Col xs={12} lg={4} className="mt-5">
                <Col xs={12} className="mx-auto">
                  <h4>What is your pet experience?</h4>
                  <Form.Select
                    id="form-select"
                    title={petExperience || "Select an option"}
                    variant="secondary"
                    onSelect={(event) => setPetExperience(event)}
                  >
                    <option value="No experience">No Experience</option>
                    <option value="Some experience">Some Experience</option>
                    <option value="Experienced">House</option>
                    <option value="Very Experienced">Very Experienced</option>
                  </Form.Select>
                  <h4>Other household pets?</h4>
                  <Form.Group className="mb-4" controlId="otherPets">
                    <Form.Control
                      type="text"
                      placeholder="Other Pets"
                      value={otherPets}
                      onChange={(event) => setOtherPets(event.target.value)}
                    />
                  </Form.Group>
                  <h4>Home Type</h4>
                  <Form.Select
                    id="form-select"
                    title={residenceType || "Select an option"}
                    variant="secondary"
                    onSelect={(event) => setResidenceType(event)}
                  >
                    <option value="apartment">Apartment</option>
                    <option value="town home">Town Home</option>
                    <option value="house">House</option>
                  </Form.Select>
                  <br></br>
                  <Col xs={12} className="mb-4">
                    <h4>Yard Size</h4>
                  <Form.Select
                    id="form-select"
                    title={yardSize || "Select an option"}
                    variant="secondary"
                    onSelect={(event) => setYardSize(event)}
                  >
                    <option value="No Yard">No Yard</option>
                    <option value="1">.05-.5 acres</option>
                    <option value="2+">.5 acres +</option>
                  </Form.Select>
                  </Col>
                </Col>
              </Col>
              <Col xs={12} lg={4} className="mt-5">
                <Col xs={12} className="mb-4">
                  <h4>Children in the household?</h4>
                  <Form.Select
                    id="form-select"
                    title={numChildren || "Select an option"}
                    variant="secondary"
                    onSelect={(event) => setNumChildren(event)}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2+">2+</option>
                  </Form.Select>
                </Col>
                <Col xs={12} className="mb-4">
                  <h4>Children Ages?</h4>
                  <Form.Select
                    id="form-select"
                    title={childrenAges || "Select an option"}
                    variant="secondary"
                    onSelect={(event) => setChildrenAges(event)}
                  >
                    <option value="no children">0-1 yrs</option>
                    <option value="1">1-3 yrs</option>
                    <option value="2+">4 yrs +</option>
                  </Form.Select>
                </Col>
              </Col>
              <div className="text-center mt-5">
                <Button variant="primary" type="submit" block id="signup-btn">
                  <h4>Apply Now!</h4>
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
