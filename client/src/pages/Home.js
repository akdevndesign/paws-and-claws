import "../styles/styles.css";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup
} from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_PROFILES } from "../utils/queries";
import PetInfo from '../components/petInfo';
import { Link } from "react-router-dom";

export default function Home() {
  const { data } = useQuery(QUERY_PROFILES);
  const getPets = data?.getPets || [];

  console.log("getPets: ", getPets);
  console.log("data :", data);

  return (
    <div>
      <Container fluid className="d-flex flex-wrap hero jumbotron jumbotron-fluid bg-lightblue position-relative">
        <Col md={6} className="p-3 hero-info text-center tofront">
          <Link>
            <img src="https://res.cloudinary.com/dusaigbyn/image/upload/v1683762073/Paws_n_claws_logo_FINAL_3_kyhwbh.png" alt="Paws and Claws" className="hero-img"></img>
          </Link>
          <p className="mt-5">
            Find Your Forever Friend: Unconditional Love Awaits
          </p>
        </Col>
        <Col md={6} className="header-image pt-6 pb-6 align-self-center">
          {/* {{ #if posts.[0] }} */}
        </Col>
      </Container>

      <section className="hero-showcase" id="showcase">
        <Container className="col-6 mx-auto text-center">
          <h2>Fur, scales, claws or paws...</h2>
          <p>They might start different but they all end in friend</p>
        </Container>
      </section>

      <section className="showcase">
        <Container fluid className="pt-5 pb-5 parent-container">
          <Row className="pet-header justify-content-between mt-5 mb-5 col-sm-8 col-md-6 col-lg-4 mx-auto">
            <Col className="d-flex align-items-center mx-auto">
              <h3 className="mb-0">Pets Available</h3>
            </Col>
            <Col
              md="6"
              className="d-flex justify-content-end align-items-center"
            >
              <ButtonGroup className="d-flex justify-content-between">
                <Button variant="primary">Dogs</Button>
                <Button variant="secondary">Cats</Button>
                <Button variant="success">Reptiles</Button>
              </ButtonGroup>
            </Col>
          </Row>
          <Row
            className="mt-5 pt-5 col-10 mx-auto mx-auto justify-content-between pet-container text-center"
          >
            {getPets.map((pet, i) => {
              return (
                <PetInfo pet={pet} i={i} />
              );
            })}
          </Row>
        </Container>
      </section>
    </div>
  );
}
