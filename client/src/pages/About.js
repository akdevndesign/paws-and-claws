// Importing the CSS file for styling
import "../styles/styles.css";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <Container
        fluid
        className="d-flex flex-wrap about jumbotron jumbotron-fluid bg-lightblue position-relative"
      >
        <Col md={6} className="about-image align-self-left"></Col>
        <Col md={6} className="p-3 about-info text-center tofront">
          <div className="about-container">
            <h2>About Paws & Claws </h2>
            <p>
              Our website is dedicated to helping pets find loving homes. We
              provide a platform for animal shelters and rescue groups to
              showcase their adoptable pets and connect with potential adopters.
            </p>
            <div className="section-break"></div>
            <h2>How to Adopt a Pet</h2>
            <p>
              Browse our website to find pets that match your lifestyle and
              preferences. Adoption requirements vary by rescue group, but
              generally, you will need to complete an application, and possibly have a home visit. Once your application
              is approved, you can take your new pal home!
            </p>
            <div className="section-break"></div>
            <h2>Why Adopt a Pet</h2>
            <p>
              Adopting a pet is a great way to add joy and companionship to your
              life, while also giving an animal in need a second chance. 
            </p>
          </div>
        </Col>
      </Container>

      <section className="about-showcase" id="showcase">
        <Container className="col-6 mx-auto justify-content-center text-center">
          <h2>Contact</h2>
          <p>Phone: 555-555-5555</p>
          <p>Email: arfarfmeow@pawsnclaws.com</p>
          <p>555 PuppyDog Lane. Cute Animal, NC</p>
        </Container>
      </section>
    </div>
  );
}

