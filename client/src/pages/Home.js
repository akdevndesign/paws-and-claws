import "../styles/styles.css";
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

export default function Home() {
  return (
    <div className="hero">
      <Container fluid className="d-flex flex-wrap">
        <Col md={6} className="p-3 hero-info text-center">
          <h1>Welcome to</h1>
          <h1>Paws &amp; Claws!</h1>
          <p className="mt-5">
            Find Your Forever Friend: Unconditional Love Awaits
          </p>
          <Button variant="primary" size="lg" id="adoptNow">
            Adopt Now
          </Button>
        </Col>
        <Col md={6} className="half">
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
          <div className="donation">
            <Button id="donate" type="submit">
              Donate
            </Button>
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
        <Container>
          <Row className="justify-content-between mb-4 mt-5">
            <Col md="6" className="d-flex align-items-center">
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
          <Row>
            <Col xs="12" md="4" className="pet-info">
              <img src="img/pet1.jpg" alt="" />
              <p>Name:</p>
              <p>Age:</p>
            </Col>
            <Col xs="12" md="4" className="pet-info">
              <img src="img/pet2.jpg" alt="" />
              <p>Name:</p>
              <p>Age:</p>
            </Col>
            <Col xs="12" md="4" className="pet-info">
              <img src="img/pet3.jpg" alt="" />
              <p>Name:</p>
              <p>Age:</p>
            </Col>
            <Col xs="12" md="4" className="pet-info">
              <img src="img/pet4.jpg" alt="" />
              <p>Name:</p>
              <p>Age:</p>
            </Col>
            <Col xs="12" md="4" className="pet-info">
              <img src="img/pet5.jpg" alt="" />
              <p>Name:</p>
              <p>Age:</p>
            </Col>
            <Col xs="12" md="4" className="pet-info">
              <img src="img/pet6.jpg" alt="" />
              <p>Name:</p>
              <p>Age:</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
