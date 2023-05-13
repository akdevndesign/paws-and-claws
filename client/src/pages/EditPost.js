import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useParams } from "react-router-dom";
import { QUERY_PET } from "../utils/queries";
import { UPDATE_PET } from "../utils/mutations";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";

export default function EditPost() {
  const { editPetId: id } = useParams();
  const { data, loading, error } = useQuery(QUERY_PET, { variables: { id } });
  const [updatePet, { error: mutationError }] = useMutation(UPDATE_PET);

  const [activityLevel, setActivityLevel] = useState(null);
  const [petName, setName] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [petAge, setAge] = useState(0);
  const [petBio, setBio] = useState("");
  const [cuddliness, setCuddliness] = useState(0);
  const [friendliness, setFriendliness] = useState(0);
  //   const [image, setImage] = useState("");

  useEffect(() => {
    if (data) {
      setActivityLevel(data.getPetById.activity_level);
      setName(data.getPetById.name);
      setAnimalType(data.getPetById.animal_type);
      setAge(data.getPetById.age);
      setBio(data.getPetById.bio);
      setCuddliness(data.getPetById.cuddliness_level);
      setFriendliness(data.getPetById.friendliness_level);
      //   setImage(data.getPetById.image_url);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAnimalTypeChange = (event) => {
    setAnimalType(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleActivityLevelChange = (event) => {
    setActivityLevel(event.target.value);
  };

  const handleCuddlinessChange = (event) => {
    setCuddliness(event.target.value);
  };

  const handleFriendlinessChange = (event) => {
    setFriendliness(event.target.value);
  };

  //   const handleImageChange = (event) => {
  //     setImage(event.target.files[0]);
  //   };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await updatePet({
        variables: {
          petId: id,
          petInput: {
            name: petName,
            animal_type: animalType,
            age: petAge,
            bio: petBio,
            activity_level: activityLevel,
            cuddliness_level: cuddliness,
            friendliness_level: friendliness,
          },
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container fluid>
      <Row className="align-items-center signup">
        <Col xs={6} className="mx-auto post-form">
          <h1 className="text-center">Edit Friend Listing {animalType}</h1>
          <Form onSubmit={handleSubmit} className="col-8 mx-auto">
            <FormGroup>
              <Label for="name">Name:</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={petName}
                onChange={handleNameChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="animal-type">Animal Type:</Label>
              <Input
                type="select"
                id="animal-type"
                name="animal-type"
                value={animalType}
                onChange={handleAnimalTypeChange}
                required
              >
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Reptile">Reptile</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="age">Age:</Label>
              <Input
                type="number"
                id="age"
                name="age"
                value={petAge}
                onChange={handleAgeChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="bio">Bio:</Label>
              <Input
                type="textarea"
                id="bio"
                name="bio"
                value={petBio}
                onChange={handleBioChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="activity-level">Activity Level (out of 10):</Label>
              <Input
                type="number"
                id="activity-level"
                name="activity-level"
                value={activityLevel}
                onChange={handleActivityLevelChange}
                min="0"
                max="10"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="cuddliness">Cuddliness (out of 10):</Label>
              <Input
                type="number"
                id="cuddliness"
                name="cuddliness"
                value={cuddliness}
                onChange={handleCuddlinessChange}
                min="0"
                max="10"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="friendliness">Friendliness (out of 10):</Label>
              <Input
                type="number"
                id="friendliness"
                name="friendliness"
                value={friendliness}
                onChange={handleFriendlinessChange}
                min="0"
                max="10"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="image">Image:</Label>
              <Input
                type="file"
                id="image"
                name="image"
                // onChange={handleImageChange}
              />
            </FormGroup>
            {mutationError ? (
              <div>
                <p className="error-text">Update failed.</p>
              </div>
            ) : null}
            <div className="col-4 mx-auto d-flex justify-content-between">
              <Button type="submit" to={"/admin"}>
                Submit
              </Button>
              <Link type="button" to={"/admin"} className="btn">
                Cancel
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
