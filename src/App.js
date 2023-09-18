import './App.css';
import Description from './component/Description';
import Name from './component/Name';
import Price from './component/Price';
import Image from './component/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { product } from "./product";

function App() {
  let firstName = "Safa";
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <main>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.url} />
          <Card.Body>
            <Name />
            <Description />
            <Price />

          </Card.Body>

          <Card.Body>
          </Card.Body>
        </Card>
      </main>
      {firstName ? (
        <div>
          <h1>Hello {firstName}</h1>
          <img src="https://cdn-icons-png.flaticon.com/512/6028/6028690.png" alt="" width="150px" />
        </div>)
        : (<h1>Hello there</h1>)}



    </div>
  );
}

export default App;
