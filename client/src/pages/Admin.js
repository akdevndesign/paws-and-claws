import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AdminPost from '../components/adminPost';
import { useQuery } from "@apollo/client";
import { QUERY_PROFILES } from "../utils/queries";
import { Link } from 'react-router-dom';

export default function Account() {

    const { data } = useQuery(QUERY_PROFILES);
    const getPets = data?.getPets || [];

    return (
        <section className="admin position-relative">
            <Container fluid className='admin-content'>
                <Row className="align-items-center mt-5">
                    <Col xs={10} className="mx-auto">
                        <h3>Admin</h3>
                    </Col>
                    <Col xs={2}>
                        <Link id="newPost" type="submit" className="text-center btn"
                        to={"/newPost"}
                        >
                            New Post +
                        </Link>
                    </Col>
                </Row>
                <Row className="col-10 mt-5 mx-auto justify-content-around admin-container">
                    {getPets.map((pet, i) => {
                        return (
                            <AdminPost pet={pet} i={i} />
                        );
                    })}
                </Row>
            </Container>
        </section>

    )
}