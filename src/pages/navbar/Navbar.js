import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logoses from '../image/logoses.png'

import './style.css';

const Navigasi = () => {
  return (
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Navbar.Brand href="/Home" className='logos'>
          <img src={logoses} alt='log' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/edukasi">Edukasi</Nav.Link>
              <Nav.Link href="https://ses-cek-kesehatan.vercel.app/">Cek Kesehatan</Nav.Link>
              <Nav.Link as={NavLink} to="/article">Artikel</Nav.Link>
              <Nav.Link as={NavLink} to="/about" >Tentang Kami</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default Navigasi;