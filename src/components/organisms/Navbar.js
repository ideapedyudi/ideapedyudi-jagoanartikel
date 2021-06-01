import { Nav, Navbar } from "react-bootstrap";

const NavbarComponent = () => {
    return (
        <Navbar className="bg-success" fixed="top" expand="lg">
            <div className="container">
                <Navbar.Brand className="text-white text-15" href="#home">Jagoan Artikel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="ml-auto justify-content-end">
                    <Nav className="ml-auto m-lg-3">
                        <Nav.Link href="#link" className="text-white">Home</Nav.Link>
                        <Nav.Link href="#paket" className="text-white">Paket Harga</Nav.Link>
                        <Nav.Link href="#home" className="text-white">Profile Penulis</Nav.Link>
                        <Nav.Link href="#link" className="text-white">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default NavbarComponent;