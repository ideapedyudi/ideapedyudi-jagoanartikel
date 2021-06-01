import React from 'react'
import './HomePricelist.css'
import Pricelist from './list.svg'
import { Card, Button, Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


export default function HomePricelist() {
    return (
        <div>
            <h3 className="mt-3" data-aos="fade-up"><center>Pricelist Artikel</center></h3>
            <Container className="col-center">
                <Row data-aos="fade-up" className="justify-content-center row">
                    <Col className="mt-4" lg={3} md={6} sm={12}>
                        <Card className="mt-4 card" style={{ width: '95%' }}>
                            <Card.Title className="mt-4">Jago Artikel</Card.Title>
                            <Card.Img className="p-4" variant="top" src={Pricelist} />
                            <Card.Body>
                                <Card.Text>
                                    <FontAwesomeIcon className="check" icon={faCheck} /> Bahasa Indonesia <br />
                                    <FontAwesomeIcon className="check" icon={faCheck} /> Artikel Populer <br />
                                    <FontAwesomeIcon className="check" icon={faCheck} /> Penulis  <br />
                                    <FontAwesomeIcon className="check" icon={faCheck} /> 80% Free Duplicate <br />
                                    <FontAwesomeIcon className="check" icon={faCheck} /> Checker

                                    <h4 className="mt-4 perkata">Rp. 30 ,-/Kata</h4>
                                </Card.Text>
                                <Button className="lihatpaket" variant="primary">Lihat Paket</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mt-4" lg={3} md={6} sm={12}>
                        <Card style={{ width: '95%' }}>
                            <Card.Title className="mt-4">Jagoan Artikel</Card.Title>
                            <Card.Img className="p-4" variant="top" src={Pricelist} />
                            <Card.Body>
                                <Card.Text>
                                    <FontAwesomeIcon className="check" icon={faCheck} /> Bahasa Indonesia <br />
                                    <FontAwesomeIcon className="check" icon={faCheck} /> Artikel Populer <br />
                                    <FontAwesomeIcon className="check" icon={faCheck} /> Penulis Jagoan <br />
                                    <FontAwesomeIcon className="check" icon={faCheck} /> 100% Free Duplicate Checker <br />
                                    <FontAwesomeIcon className="check" icon={faCheck} /> 1x Revisi <br />

                                    <h4 className="mt-4 perkata">Rp. 40 ,-/Kata</h4>
                                </Card.Text>
                                <Button className="lihatpaket" variant="primary">Lihat Paket</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mt-4" lg={3} md={6} sm={12}>
                        <Card style={{ width: '95%' }}>
                            <Card.Title className="mt-4">Super Jagoan Artikel</Card.Title>
                            <Card.Img className="p-4" variant="top" src={Pricelist} />
                            <Card.Body>
                                <Card.Text>
                                    <FontAwesomeIcon className="check" icon={faCheck} /> Bahasa Indonesia <br />
                                    <FontAwesomeIcon className="check" icon={faCheck} /> Artikel Populer  <br />
                                    <FontAwesomeIcon className="check" icon={faCheck} /> Penulis Super Jagoan <br />
                                    <FontAwesomeIcon className="check" icon={faCheck} /> Keyword Targeted <br />
                                    <FontAwesomeIcon className="check" icon={faCheck} /> 100% Copyscape Premium <br />
                                    <FontAwesomeIcon className="check" icon={faCheck} /> Refrensi Web Indo <br />
                                    <FontAwesomeIcon className="check" icon={faCheck} /> 1x Revisi

                                    <h4 className="mt-4 perkata">Rp. 50 ,-/Kata</h4>
                                </Card.Text>
                                <Button className="lihatpaket" variant="primary">Lihat Paket</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mt-4" lg={3} md={6} sm={12}>
                        <Card style={{ width: '95%' }}>
                            <Card.Title className="mt-4">Hyper Jagoan Artikel</Card.Title>
                            <Card.Img className="p-4" variant="top" src={Pricelist} />
                            <Card.Body>
                                <Card.Text>
                                    <FontAwesomeIcon className="check" icon={faCheck} /> Bahasa Indonesia <br />
                                    <FontAwesomeIcon className="check" icon={faCheck} /> Artikel Populer/formal <br />
                                    <FontAwesomeIcon className="check" icon={faCheck} /> Penulis Hyper Jagoan <br />
                                    <FontAwesomeIcon className="check" icon={faCheck} /> Riset Judul Artikel <br />
                                    <FontAwesomeIcon className="check" icon={faCheck} /> Keyword Targeted/No <br />
                                    <FontAwesomeIcon className="check" icon={faCheck} /> Referensi Web Londo <br />
                                    <FontAwesomeIcon className="check" icon={faCheck} /> 100% Copyscape Premium <br />
                                    <FontAwesomeIcon className="check" icon={faCheck} /> 2x Revisi

                                    <h4 className="mt-4 perkata">Rp. 100 ,-/Kata</h4>
                                </Card.Text>
                                <Button className="lihatpaket" variant="primary">Lihat Paket</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
