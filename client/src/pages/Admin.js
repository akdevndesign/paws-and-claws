import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminPost from "../components/adminPost";
import { useQuery } from "@apollo/client";
import { QUERY_PROFILES } from "../utils/queries";
import { Link } from "react-router-dom";

export default function Application() {
  const { data } = useQuery(QUERY_PROFILES, { fetchPolicy: "network-only" });
  const getPets = data?.getPets || [];

  return (
    <section className="admin position-relative">
      <Container fluid className="admin-content">
        <Row className="align-items-center mt-5">
          <Col lg={10} xs={6} className="mx-auto">
            <h3>Admin</h3>
          </Col>
          <Col lg={2} xs={6}>
            <Link
              id="newPost"
              type="submit"
              className="text-center btn"
              to={"/newPost"}
            >
              New Post +
            </Link>
          </Col>
        </Row>
        <Row className="col-10 mt-5 mx-auto justify-content-around admin-container">
          {getPets.map((pet, i) => {
            return <AdminPost pet={pet} key={i} />;
          })}
        </Row>
      </Container>
    </section>
  );
}
