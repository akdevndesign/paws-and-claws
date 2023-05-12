// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from "reactstrap";
// import { useParams } from "react-router-dom";
// import { QUERY_PET } from "../utils/queries";
// import { useQuery } from "@apollo/client";

// export default function EditPost() {
//     // const { editPetId: id } = useParams();
//     // const { data, loading, error } = useQuery(QUERY_PET, { variables: { id } });
//     // const {
//     //     activity_level,
//     //     cuddliness_level,
//     //     friendliness_level,
//     //     age,
//     //     name,
//     //     image_url,
//     //     bio,
//     // } = data?.getPetById || {};
//     // if (loading) return <p>Loading...</p>;
//     // if (error) return <p>Error: {error.message}</p>;

//     // [name, setName] = useState("");
//     // [animalType, setAnimalType] = useState("");
//     // [age, setAge] = useState("");
//     // [bio, setBio] = useState("");
//     // [activityLevel, setActivityLevel] = useState("");
//     // [cuddliness, setCuddliness] = useState("");
//     // [friendliness, setFriendliness] = useState("");
//     // [image, setImage] = useState(null);

//     // const handleNameChange = (event) => {
//     //     setName(event.target.value);
//     // };

//     // const handleAnimalTypeChange = (event) => {
//     //     setAnimalType(event.target.value);
//     // };

//     // const handleAgeChange = (event) => {
//     //     setAge(event.target.value);
//     // };

//     // const handleBioChange = (event) => {
//     //     setBio(event.target.value);
//     // };

//     // const handleActivityLevelChange = (event) => {
//     //     setActivityLevel(event.target.value);
//     // };

//     // const handleCuddlinessChange = (event) => {
//     //     setCuddliness(event.target.value);
//     // };

//     // const handleFriendlinessChange = (event) => {
//     //     setFriendliness(event.target.value);
//     // };

//     // const handleImageChange = (event) => {
//     //     setImage(event.target.files[0]);
//     // };

//     // const handleSubmit = (event) => {
//     //     event.preventDefault();
//     //     console.log({
//     //         name,
//     //         animalType,
//     //         age,
//     //         bio,
//     //         activityLevel,
//     //         cuddliness,
//     //         friendliness,
//     //         image,
//     //     });
//     // };

//     return (
//         <Container fluid>
//             <Row className="align-items-center signup">
//                 <Col xs={6} className="mx-auto post-form">
//                     <h1 className="text-center">New Friend Listing</h1>
//                     <Form onSubmit={handleSubmit} className="col-8 mx-auto">
//                         <FormGroup>
//                             <Label for="name">Name:</Label>
//                             <Input
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 value={name}
//                                 onChange={handleNameChange}
//                                 required
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="animal-type">Animal Type:</Label>
//                             <Input
//                                 type="select"
//                                 id="animal-type"
//                                 name="animal-type"
//                                 value={animalType}
//                                 onChange={handleAnimalTypeChange}
//                                 required
//                             >
//                                 <option value="">-- Select an animal type --</option>
//                                 <option value="Dog">Dog</option>
//                                 <option value="Cat">Cat</option>
//                                 <option value="Reptile">Reptile</option>
//                             </Input>
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="age">Age:</Label>
//                             <Input
//                                 type="number"
//                                 id="age"
//                                 name="age"
//                                 value={age}
//                                 onChange={handleAgeChange}
//                                 required
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="bio">Bio:</Label>
//                             <Input
//                                 type="textarea"
//                                 id="bio"
//                                 name="bio"
//                                 value={bio}
//                                 onChange={handleBioChange}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="activity-level">Activity Level (out of 10):</Label>
//                             <Input
//                                 type="number"
//                                 id="activity-level"
//                                 name="activity-level"
//                                 value={activityLevel}
//                                 onChange={handleActivityLevelChange}
//                                 min="0"
//                                 max="10"
//                                 required
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="cuddliness">Cuddliness (out of 10):</Label>
//                             <Input
//                                 type="number"
//                                 id="cuddliness"
//                                 name="cuddliness"
//                                 value={cuddliness}
//                                 onChange={handleCuddlinessChange}
//                                 min="0"
//                                 max="10"
//                                 required
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="friendliness">Friendliness (out of 10):</Label>
//                             <Input
//                                 type="number"
//                                 id="friendliness"
//                                 name="friendliness"
//                                 value={friendliness}
//                                 onChange={handleFriendlinessChange}
//                                 min="0"
//                                 max="10"
//                                 required
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="image">Image:</Label>
//                             <Input
//                                 type="file"
//                                 id="image"
//                                 name="image"
//                                 onChange={handleImageChange}
//                                 required
//                             />
//                         </FormGroup>
//                         <div className="col-4 mx-auto d-flex justify-content-between">
//                             <Button type="submit">Submit</Button>
//                             <Link type="submit" to={"/admin"} className="btn">Cancel</Link>
//                         </div>
//                     </Form>
//                 </Col>
//             </Row>
//         </Container>
//     );

// }