import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import AdminPost from '../components/adminPost';

export default function Account() {
    return (
        <section className="admin position-relative">
            <Container fluid className='admin-content'>
                <Row className="align-items-center mt-5">
                    <Col xs={11} className="mx-auto">
                        <h3>Admin</h3>
                    </Col>
                    <Col xs={1}>
                        <i className="bi bi-envelope"></i>
                    </Col>
                </Row>
                <Row className="justify-content-around mt-5">
                    <Col xs={10} className="d-flex">
                    <AdminPost/>
                        <Col xs={6}>
                            <Row className="admin-item col-10 mb-5 align-items-center">
                                <Col xs={3}>
                                    <img className="post-img" src="#" />
                                </Col>
                                <Col xs={6}>
                                    <h4>Arnold</h4>
                                    <p>4 yr Pomeranian</p>
                                </Col>
                                <Col xs={3}>
                                    <p>12/12/2023</p>
                                </Col>
                            </Row>
                            <Row className="admin-item col-10 mb-5 align-items-center">
                                <Col xs={3}>
                                    <img className="post-img" src="#" />
                                </Col>
                                <Col xs={6}>
                                    <h4>Arnold</h4>
                                    <p>4 yr Pomeranian</p>
                                </Col>
                                <Col xs={3}>
                                    <p>12/12/2023</p>
                                </Col>
                            </Row>
                            <Row className="admin-item col-10 mb-5 align-items-center">
                                <Col xs={3}>
                                    <img className="post-img" src="#" />
                                </Col>
                                <Col xs={6}>
                                    <h4>Arnold</h4>
                                    <p>4 yr Pomeranian</p>
                                </Col>
                                <Col xs={3}>
                                    <p>12/12/2023</p>
                                </Col>
                            </Row>
                            <Row className="admin-item col-10 mb-5 align-items-center">
                                <Col xs={3}>
                                    <img className="post-img" src="#" />
                                </Col>
                                <Col xs={6}>
                                    <h4>Arnold</h4>
                                    <p>4 yr Pomeranian</p>
                                </Col>
                                <Col xs={3}>
                                    <p>12/12/2023</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6}>
                            <Row className="admin-item col-10 mb-5 align-items-center">
                                <Col xs={3}>
                                    <img className="post-img" src="#" />
                                </Col>
                                <Col xs={6}>
                                    <h4>Arnold</h4>
                                    <p>4 yr Pomeranian</p>
                                </Col>
                                <Col xs={3}>
                                    <p>12/12/2023</p>
                                </Col>
                            </Row>
                            <Row className="admin-item col-10 mb-5 align-items-center">
                                <Col xs={3}>
                                    <img className="post-img" src="#" />
                                </Col>
                                <Col xs={6}>
                                    <h4>Arnold</h4>
                                    <p>4 yr Pomeranian</p>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}