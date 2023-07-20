import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Footer = () => {
    return (
        <Navbar className='sticky-bottom' bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">iBox</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center">
          <Navbar.Text>
          Built with love Alwin <a href="#login" className='text-decoration-none text-center'>2023</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Footer;