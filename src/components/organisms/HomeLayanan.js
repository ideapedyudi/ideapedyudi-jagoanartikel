import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faSearchDollar, faCopyright } from '@fortawesome/free-solid-svg-icons'

const col3Compenent = () => {
    return (
        <Container className="col-center">
            <Row data-aos="fade-up">
                <Col className="mt-4" xs={6} md={4}>
                    <FontAwesomeIcon className="iconcol3" icon={faTachometerAlt} size="3x" />
                    <h5 className="layanan mt-2">Proses Cepat</h5>
                    <p>100+ penulis siap mengerjakan artikel dengan cepat untuk berbagai kebutuhan.</p>
                </Col>
                <Col className="mt-4" xs={6} md={4}>
                    <FontAwesomeIcon className="iconcol3" icon={faSearchDollar} size="3x" />
                    <h5 className="layanan mt-2">Gratis 3 Layanan</h5>
                    <p>Kami memberikan gratis layanan riset kata kunci, riset judul artikel, upload langsung di website & gratis gambar.</p>
                </Col>
                <Col className="mt-4" xs={6} md={4}>
                    <FontAwesomeIcon className="iconcol3" icon={faCopyright} size="3x" />
                    <h5 className="layanan mt-2">Lolos Copyscape</h5>
                    <p>Artikel 100% unik dan sudah lolos plagiarism checker copyscape premium.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default col3Compenent;