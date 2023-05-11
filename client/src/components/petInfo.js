import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PetProfile from "../pages/PetProfile";

function PetInfo(props) {
  const { pet, i } = props;
  console.log(pet.petId);
  console.log(pet._id);

  return (
    <div className="col-md-4 col-xs-6">
      <Col xs="12" md="12" className="pet-info" style={{ gridArea: `pet${i + 1}` }} key={i}>
        <Link className="nav-link" to={`/petProfile/${pet._id}`}>
          <img src={pet.image_url} alt={pet.name} />
        </Link>
        <h3>{pet.name}</h3>
        <p>{pet.age} years old</p>
      </Col>
    </div>
  );
}

export default PetInfo;