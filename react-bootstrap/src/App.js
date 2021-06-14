import './App.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import TasksPage from "./pages/navtasks";
import ConfigPage from "./pages/navconfig";
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Tasks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/config">Config</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <hr />

        <Route exact path="/" component={TasksPage} />
        <Route path="/config" component={ConfigPage} />
      </Container>
  </Router>
  );
}

export default App;