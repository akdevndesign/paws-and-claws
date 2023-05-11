import { Link } from "react-router-dom";
import { Row, Col, Container } from 'react-bootstrap';
import "../styles/styles.css";

export default function AdminPost(props) {

    const { pet, i } = props;

    return (
        <Row className="col-5 mb-5 align-items-center admin-item mt-1">
            {/* content for the first column goes here */}
            <Col xs={3}>
                <Link className="nav-link"  to={`/petProfile/${pet._id}`}>
                    <img src={pet.image_url} className="post-img" alt="" />
                </Link>
            </Col>
            <Col xs={5}>
                <h4>{pet.name}</h4>
                <p>{pet.age} years old</p>
            </Col>
            <Col xs={2} className="text-center">
                <p>12/12/2023</p>
            </Col>
            <Col xs={2} className="text-center">
                <i class="bi bi-trash cust-trash"></i>
            </Col>
        </Row>
    )
}