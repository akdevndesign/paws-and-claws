import "../styles/styles.css";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useQuery } from "@apollo/client";
import { QUERY_PROFILES } from "../utils/queries";

export default function Home() {
  const { data } = useQuery(QUERY_PROFILES);
  const getPets = data?.getPets || [];

  console.log("getPets: ", getPets);
  console.log("data :", data);

  return (
    <div>
      <Container fluid className="d-flex flex-wrap hero">
        <Col md={7} className="p-3 hero-info text-center">
          <h1>Welcome to</h1>
          <h1>Paws &amp; Claws!</h1>
          <p className="mt-5">
            Find Your Forever Friend: Unconditional Love Awaits
          </p>
          <Button variant="primary" size="lg" id="adoptNow">
            Adopt Now
          </Button>
        </Col>
        <Col md={4} className="half">
          <div className="styling styling-max">
            <Navbar expand="lg" className="main">
              <Container fluid>
                <InputGroup className="input-group-search">
                  <FormControl type="text" placeholder="Search..." />
                  <InputGroup.Text style={{ width: "50px" }}>
                    <span className="bi bi-search search-icon"></span>
                  </InputGroup.Text>
                </InputGroup>
              </Container>
            </Navbar>
          </div>
        </Col>
      </Container>
      <section className="hero-showcase" id="showcase">
        <Container className="col-6 mx-auto text-center">
          <h2>Fur, scales, claws or paws...</h2>
          <p>They might start different but they all end in friend</p>
        </Container>
      </section>
      <section className="showcase">
        <Container className="pt-5 pb-5">
          <Row className="pet-header justify-content-between mt-5 mb-5 col-6 mx-auto">
            <Col className="d-flex align-items-center mx-auto">
              <h3 className="mb-0">Pets Available</h3>
            </Col>
            <Col
              md="6"
              className="d-flex justify-content-end align-items-center"
            >
              <ButtonDropdown isOpen={false} toggle={() => {}}>
                <DropdownToggle caret>Available</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Dogs</DropdownItem>
                  <DropdownItem>Cats</DropdownItem>
                  <DropdownItem>Reptiles</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </Col>
          </Row>
          <Row
            className="mt-5 pt-5 col-8 mx-auto"
            style={{
              display: "grid",
              gridTemplateAreas: "'pet1 pet2 pet3''pet4 pet5 pet6'",
            }}
          >
            {getPets.map((pet, i) => {
              return (
                <Col
                  xs="12"
                  md="12"
                  className="pet-info"
                  style={{ gridArea: `pet${i + 1}`}}
                  key= {i}
                >
                  <Link className="nav-link" to={"/petProfile"}>
                    <img src={pet.image_url} alt="" />
                  </Link>git
                  <p>Name: {pet.name}</p>
                  <p>Age:{pet.age}</p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </div>
  );
}
