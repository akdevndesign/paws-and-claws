import "../styles/styles.css";
import { useState } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_PROFILES } from "../utils/queries";
import PetInfo from "../components/petInfo";
import { Link } from "react-router-dom";

export default function Home() {
  const { data } = useQuery(QUERY_PROFILES);
  const allPets = data?.getPets || [];
  const [petFilter, setPetFilter] = useState("all");
  let getPets;
  switch (petFilter) {
    case "dogs":
      getPets = allPets.filter((pet) => {
        return pet.animal_type === "Dog";
      });
      break;
    case "cats":
      getPets = allPets.filter((pet) => {
        return pet.animal_type === "Cat";
      });
      break;
    case "reptiles":
      getPets = allPets.filter((pet) => {
        return pet.animal_type === "Reptile";
      });
      break;
    default:
      getPets = allPets;
  }
  console.log("getPets array: ", getPets);
  const filterClickHandler = (event) => {
    setPetFilter(event.target.getAttribute("data-type"));
  };
  return (
    <div id="home">
      <Container
        fluid
        className="d-flex flex-wrap hero jumbotron jumbotron-fluid bg-lightblue position-relative"
      >
        <Col md={6} className="p-3 hero-info text-center tofront">
          <Link>
            <img
              src="https://res.cloudinary.com/dusaigbyn/image/upload/v1683762073/Paws_n_claws_logo_FINAL_3_kyhwbh.png"
              alt="Paws and Claws"
              className="hero-img hero-logo"
            ></img>
          </Link>
          {/* <p className="mt-5">
            Find Your Forever Friend: Unconditional Love Awaits
          </p> */}
        </Col>
        <Col md={6} className="header-image pt-6 pb-6 align-self-center"></Col>
      </Container>

      <section className="hero-showcase" id="showcase">
        <Container className="col-xs-12 col-lg-6 mx-auto justify-content-center text-center">
          <h2>Fur, scales, claws or paws...</h2>
          <p>Find your forever friend!</p>
        </Container>
      </section>

      <section className="showcase">
        <Container fluid className="pt-5 pb-5 parent-container">
          <Row className="justify-content-between mt-5 mb-5 col-sm-8 col-md-6 col-lg-4 mx-auto">
            <h3 className="text-center">Pets Available</h3>

            <Col className="mx-auto">
              <ButtonGroup className="d-flex justify-content-between">
                <Button
                  variant="primary"
                  data-type="dogs"
                  onClick={filterClickHandler}
                >
                  Dogs
                </Button>
                <Button
                  variant="secondary"
                  data-type="cats"
                  onClick={filterClickHandler}
                >
                  Cats
                </Button>
                <Button
                  variant="success"
                  data-type="reptiles"
                  onClick={filterClickHandler}
                >
                  Reptiles
                </Button>
                <Button
                  variant="success"
                  data-type="all"
                  onClick={filterClickHandler}
                >
                  All
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
          <Row className="mt-5 pt-5 col-xs-12 col-lg-8 mx-auto justify-content-between pet-container text-center">
            {getPets.map((pet, i) => {
              return <PetInfo pet={pet} i={i} />;
            })}
          </Row>
        </Container>
      </section>
    </div>
  );
}
