import { Link } from "react-router-dom";
import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../styles/styles.css";
import { useMutation} from "@apollo/client";
import { DELETE_PET } from "../utils/mutations";

export default function AdminPost(props) {
  const { pet } = props;
  const [deletePet, { error }] = useMutation(DELETE_PET);
    const [isDeleted, setIsDeleted] = useState(false);
  const handlePetDelete = async () => {
    try {
      const response = await deletePet({
        variables: {
          petId: pet._id,
        },
      });
      console.log(response);
      if (response) {
        setIsDeleted(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (isDeleted) {
    return null;
  } else {
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
        {error ? <p>Unable to delete.</p> : null}
        <Col xs={3} className="text-center">
          <Link to={`/editPost/${pet._id}`}>
            <i class="bi bi-pencil cust-pencil"></i>
          </Link>
          <Link>
            <i class="bi bi-trash cust-trash" onClick={handlePetDelete}></i>
          </Link>
        </Col>
      </Row>
    );
  }
}
