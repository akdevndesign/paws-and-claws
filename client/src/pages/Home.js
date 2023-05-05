import "../styles/styles.css";
import { Container, Row, Col, Button, Navbar, Nav, InputGroup, FormControl } from 'react-bootstrap';

export default function Home() {
    return (
        <div className="hero">
        <Container fluid className="d-flex flex-wrap">
          <Col md={6} className="p-3 hero-info text-center">
            <h1>Welcome to</h1>
            <h1>Paws &amp; Claws!</h1>
            <p className="mt-5">Find Your Forever Friend: Unconditional Love Awaits</p>
            <Button variant="primary" size="lg" id="adoptNow">Adopt Now</Button>
          </Col>
          <Col md={6} className="half">
            <div className="styling styling-max">
              <Navbar expand="lg" className="main">
                <Container fluid>
                  <InputGroup className="input-group-search">
                    <FormControl type="text" placeholder="Search..." />
                    <InputGroup.Text style={{ width: '50px' }}>
                      <span className="bi bi-search search-icon"></span>
                    </InputGroup.Text>
                  </InputGroup>
                </Container>
              </Navbar>
            </div>
            <div className="donation">
              <Button id="donate" type="submit">Donate</Button>
            </div>
          </Col>
        </Container>
      </div>
    )
}