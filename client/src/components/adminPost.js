import { Link } from "react-router-dom";
import { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../styles/styles.css";

export default function AdminPost() {
    return (
        <Col md={6}>
            <Row className="admin-item col-10 mb-5 align-items-center">
                {/* content for the first column goes here */}
                <Col xs={3}>
                    <img className="post-img" src="#" />
                </Col>
                <Col xs={6}>
                    <h4>Arnold</h4>
                    <p>4 yr Pomeranian</p>
                </Col>
                <Col className="text-center">
                <i class="bi bi-trash cust-trash"></i>
                <p>12/12/2023</p>
                </Col>
            </Row>
        </Col>
    )
}