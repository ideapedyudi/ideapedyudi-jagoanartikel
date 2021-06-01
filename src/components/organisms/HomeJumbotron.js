import { Jumbotron, Container, Button, Row, Col, img } from "react-bootstrap";
import panelgambar from './write.svg';
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

const JumbotronComponent = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <Jumbotron className="jumb">
            <Container className="">
                <Row>
                    <Col lg={6} xs={12}>
                        <div className="pt" data-aos="fade-right">
                            <h3>Jasa Penulis Artikel Profesional</h3>
                            <p>
                                Kami jasa penulis artikel yang menyediakan layanan terlengkap semua kebutuhan
                                konten website anda. Pilih penulis dengan level penulis terbaik. Tersedia juga artikel instan siap pakai.
                            </p>
                            <>
                                <Button variant="warning text-white">Chat WhatSapp</Button>{' '}
                            </>
                        </div>
                    </Col>
                    <Col className="col-post" xs={6} data-aos="fade-left">
                        <img src={panelgambar} className="imgpost" alt="logo" />
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
};

export default JumbotronComponent;