import { Link } from "react-router-dom";
import { Row, Col, Container } from 'react-bootstrap';
import "../styles/styles.css";

export default function AdminPost(props) {

    const { pet, i } = props;

    return (
        <Row className="col-5 mb-5 align-items-center admin-item mt-1">
            {/* content for the first column goes here */}
            <Col xs={3}>
                <Link className="nav-link" to={`/petProfile/${pet._id}`}>
                    <img src={pet.image_url} className="post-img" alt="" />
                </Link>
            </Col>
            <Col xs={6}>
                <h4>{pet.name}</h4>
                <p>{pet.age} years old</p>
            </Col>
            <Col xs={3} className="text-center">
                <Link to={`/editPost/${pet._id}`}>
                    <i class="bi bi-pencil cust-pencil"></i>
                </Link>
                <Link>
                    <i class="bi bi-trash cust-trash"></i>
                </Link>
            </Col>
        </Row>
    )
}