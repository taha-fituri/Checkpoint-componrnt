import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyAddressComponent from "./Component/Profile/Address.js";
import MyProfileComponent from "./Component/Profile/ProfilePhoto";
import MyFullNAmeComponent from "./Component/Profile/FullName.js";

import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Table,
  Carousel,
} from "react-bootstrap";

import Carousel1 from "./Images/Carousel1.jpg";
import Carousel2 from "./Images/Carousel2.jpg";
import Carousel3 from "./Images/Carousel3.jpg";

function App() {
  return (
    <div className="App">
      {/* NavBar Code */}
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Raqam-e Team</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Our services</Nav.Link>
              <Nav.Link href="#grupe">Group</Nav.Link>
              <NavDropdown
                title="Select Your Programer"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Othman</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Emhemmed</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Anas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Kholod</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Ehdaa</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Taha</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#emailadd">Join US</Nav.Link>
              <Nav.Link eventKey={2} href="#emailadd">
                Contact US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Carousel Code */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel1}
            height="650px"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel2}
            height="650px"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel3}
            height="650px"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* Table Code */}
      <h2 style={{ color: "white" }}>
        <a href="#grupe" name="grupe">
          {" "}
        </a>
        My Team
      </h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Othman</td>
            <td>Alshawesh</td>
            <td>othman.shawes@gmail.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Emhemmed</td>
            <td>Qatesh</td>
            <td>Emhemmed.qetesh@gmail.com</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Anas</td>
            <td>Algheryani</td>
            <td>anas.algheryani@gmail.com</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Kholod</td>
            <td>Hamza</td>
            <td>kholod.hamza@gmail.com</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Ehdaa</td>
            <td>Alnamroud</td>
            <td>ehdaa.alnamroud@gmail.com</td>
          </tr>
        </tbody>
      </Table>
      {/* Form Code */}
      <h2 style={{ color: "white" }}>My Profile</h2>

      <div className="container profile1 mt-5 mb-5">
        <div className="row no-gutters">
          <div className="col-md-4 col-lg-4">
            <MyProfileComponent />
          </div>
          <div className="col-md-8 col-lg-8">
            <div className="d-flex flex-column">
              <div className="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
                <MyFullNAmeComponent />
                <MyAddressComponent />
              </div>
              <div className="p-3 bg-black text-white">
                <h6>Web designer &amp; Developer</h6>
              </div>
              <div className="d-flex flex-row text-white colordiv">
                <div className="p-4 bg-primary text-center skill-block">
                  <h4>90%</h4>
                  <h6>Bootstrap</h6>
                </div>
                <div className="p-3 bg-success text-center skill-block">
                  <h4>70%</h4>
                  <h6>Jquery</h6>
                </div>
                <div className="p-3 bg-warning text-center skill-block">
                  <h4>80%</h4>
                  <h6>HTML</h6>
                </div>
                <div className="p-3 bg-danger text-center skill-block">
                  <h4>75%</h4>
                  <h6>PHP</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Code */}

      <footer className="py-5">
        <div className=" footerr">
          <div className="col-4 offset-1">
            <h5 className="text-uppercase">ABOUT US </h5>
            <p>
              Our team is ready to meet all the needs of customers
              <br /> from designing commercial websites to designing corporate
              websites, personal websites and others{" "}
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-4 offset-1">
            <h5 className="text-uppercase">Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Email address : tahatiay53@gmail.com</a>
              </li>
              <li>
                <a href="#!">Phone Number : 0021654080468</a>
              </li>
              <li>
                <a href="#!">Other Ph Num : 00218916627970</a>
              </li>
              <li>
                <a href="#!">Address : Aluwaina-tunes</a>
              </li>
            </ul>
          </div>

          <div className="col-4 offset-1">
            <form>
              <h5>Join US</h5>
              <p>Send Your E-Mail to us & We will contact you </p>
              <div className="d-flex w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  <a href="#emailadd" name="emailadd">
                    {" "}
                  </a>
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className=" footerc  border-top">
          <br />
          <p>© 2021 Company, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
