import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { CREATE_PET } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { isConstValueNode } from "graphql";

export default function NewPost() {
  const [createPet, { error }] = useMutation(CREATE_PET);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [cuddliness, setCuddliness] = useState("");
  const [friendliness, setFriendliness] = useState("");
  const [healthHistory, setHealthHistory] = useState("");
  const [image, setImage] = useState("");

  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dusaigbyn",
        uploadPreset: "tstxkivf",
      },
      function (error, result) {
        console.log("result: ", result);
        if (!error && result && result.event === "success") {
          setImage(result.info.secure_url);
          console.log("result info: ", result.info.secure_url);
        }
      }
    );
  }, []);

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

  const handleHealthHistoryChange = (event) => {
    setHealthHistory(event.target.value);
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

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createPet({
        variables: {
          petInput: {
            name: name,
            animal_type: animalType,
            age: parseInt(age),
            bio: bio,
            health_history: healthHistory,
            activity_level: parseInt(activityLevel),
            cuddliness_level: parseInt(cuddliness),
            friendliness_level: parseInt(friendliness),
            image_url: image,
          },
        },
      });
      console.log(response);
      if (response) {
        navigate("/admin");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container fluid>
      <Row className="align-items-center signup">
        <Col xs={12} md={6} className="mx-auto post-form">
          <h1 className="text-center">New Friend Listing</h1>
          <Form onSubmit={handleSubmit} className="col-8 mx-auto">
            <FormGroup>
              <Label for="name">Name:</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={name}
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
                <option value="">-- Select an animal type --</option>
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
                value={age}
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
                value={bio}
                onChange={handleBioChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="healthhistory">Health History:</Label>
              <Input
                type="textarea"
                id="healthhistory"
                name="healthhistory"
                value={healthHistory}
                onChange={handleHealthHistoryChange}
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
              <button 
              type = "button"
              onClick={() => widgetRef.current.open()}>
                Upload Image
              </button>
            </FormGroup>
            {error ? (
              <div>
                <p className="error-text">Failed to create post.</p>
              </div>
            ) : null}
            <div className="col-lg-6 mx-auto d-flex justify-content-between">
              <Button type="submit">Submit</Button>
              <Link type="submit" to={"/admin"} className="btn">
                Cancel
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
