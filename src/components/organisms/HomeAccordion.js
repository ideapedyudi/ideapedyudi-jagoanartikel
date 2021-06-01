import React, { Component } from "react";
import { Accordion, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export class HomeAccordion extends Component {
    render() {
        return (
            <div className="mt-5">
                <h3 className="mt-3" data-aos="fade-up"><center>Q & A</center></h3>
                <div className="container mt-5">
                    <Row className="justify-content-center">
                        <Col className="mt-4" data-aos="fade-right" lg={5} md={12} sm={12}>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Apakah ada minimal pemesanan?
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Minimal order 5 artikel. Untuk mendapatkan layanan gratis riset, upload & gambar silahkan order sesuai paket yang ada.</Card.Body>
                                    </Accordion.Collapse>
                                </Card >

                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        Apa perbedaan jago, jagoan, super jagoan, hyper jagoan?
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>Semua level dibedakan berdasarkan kualitas maupun jam terbang penulis. Selain jam terbang penulis, rincian layanan juga mempengaruhi level. Untuk Anda yang membutuhkan artikel berkualitas, silahkan order minimal level jagoan.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        Bagaimana cara memesan artikel?
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>Untuk kecepatan layanan, silahkan hub CS  kami melalui whatsapp.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="3">
                                        Apa perbedaan Free Duplicat cheker dengan copyscape?
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>Free duplicate checker merupakan alat deteksi duplikat konten gratis. Dalam hal ini kami menggunakan standar “small seo tools”.

Untuk Premium duplicate checker kami menggunakan Copyscape yang berbayar (premium) dengan hasil yang jauh lebih akurat.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion >
                        </Col>

                        <Col className="mt-4" data-aos="fade-left" lg={5} md={15} sm={12}>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        Apa ada minimum jumlah kata?
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>Untuk standar postingan artikel populer yang ditujukan untuk postingan blog atau update website kami sarankan anda memilih minimal 500 kata per artikelnya.</Card.Body>
                                    </Accordion.Collapse>
                                </Card >

                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="5">
                                        Menerima niche apa saja?
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="5">
                                        <Card.Body>Kami mengerjakan semua niche seperti kecantikan, kesehatan, lifestyle, bisnis, UKM, manajemen, agrobisnis, sport, automotif, keuangan dan investasi, dan topik lainnnya. Kami tidak melayani topik Judi, Pornografi dan artikel – artikel yang bertentangan dengan Hukum di Indonesias.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="6">
                                        Bagaimana sistem pembayarannya?
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="6">
                                        <Card.Body>Pembayaran bisa dilakukan 100% di awal atau DP sebesar 50% dan pelunasan 1 x 24 setelah file hasil final diterima.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="7">
                                        Berapa lama proses pengerjaan artikel?
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="7">
                                        <Card.Body>1 paket artikel biasanya kami bisa selesaikan dalam waktu 3-5 hari tergantung pada antrian pesanan yang kami terima. </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion >
                        </Col>
                    </Row>
                </div >
            </div >
        );
    }
}

export default HomeAccordion;