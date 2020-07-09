import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Popup from "reactjs-popup";

import { SocialIcon } from "react-social-icons";

import {
  Navbar,
  Nav,
  InputGroup,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

function App() {
  const [name, setName] = useState("");
  const [doggoAge, setDoggoAge] = useState("");
  const [humanAge, setHumanAge] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setDoggoAge(event.target.value);
  };

  isNaN();

  const doggoToHumanAgeCalc = (event) => {
    if (
      !!doggoAge &&
      !!name &&
      !isNaN(doggoAge) &&
      (doggoAge > 0) & (doggoAge < 30)
    ) {
      const inHumanAge = 16 * Math.log(doggoAge) + 31;
      setHumanAge(inHumanAge);
      setShowPopup((prevResult) => !prevResult);
    } else {
      alert("Enter the name and age and then continue");
      return;
    }

    event.preventDefault();
  };

  return (
    <div className="App">
      {/* <h1 style={{ color: "#fff" }}>How Old is my Dog?</h1> */}
      <header>
        <Navbar
          collapseOnSelect
          expand="sm"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Navbar.Brand href="#home">
            <img src="../logosmall.png" alt="dog" />
            {"  "}DoggAge
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#changes">Changes</Nav.Link>
              <Nav.Link href="#donate">Donate</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">About</Nav.Link>
              <Nav.Link eventKey={2} href="#memes"></Nav.Link>
              <NavDropdown title="" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <div className="content">
        <div className="form-area">
          <Form onSubmit={doggoToHumanAgeCalc}>
            <InputGroup className="inputfield">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">
                  Name
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Name"
                aria-describedby="inputGroup-sizing-sm"
                value={name}
                onChange={nameChangeHandler}
              />
            </InputGroup>
            <InputGroup className="inputfield">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">Age</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Age"
                aria-describedby="inputGroup-sizing-sm"
                value={doggoAge}
                onChange={ageChangeHandler}
              />
            </InputGroup>

            <Button className="submit-btn" type="submit">
              Find Out
            </Button>
          </Form>

          {/* <a
            class="bmc-button"
            target="_blank"
            href="https://www.buymeacoffee.com/abhisheksah"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
              alt="Buy me a Tea"
            />
            <span style={{ marginLeft: 5, fontSize: 19 }}>Buy me a Tea</span>
          </a> */}
          <MyPopup
            open={showPopup}
            closeOnDocumentClick
            onClose={() => setShowPopup(false)}
          >
            <h3 style={{ color: "#000" }}>
              Your {name} is {Math.floor(humanAge)} years old
            </h3>
          </MyPopup>
        </div>
        <div className="info-area">
          <div className="contributors">
            <img
              alt="ucsd"
              className="ucsdlogo"
              src="https://crackingmedadmissions.com/wp-content/uploads/2017/08/UC_San_Diego_School_of_Medicine_Logo_Transparent.jpg"
            />
            {/* <Image
              className="my-img"
              src="https://lh3.googleusercontent.com/Rr8J2aTwPgaDcTgJiMwSpaC4e-ce9xp4yloUMRUpOQLZdVgh_YkIQOm7WPRZjOU7LQ9sQcrrUCKlPMIluwpgRBvv1uRe6W7Pcpop5RPeUm9FzgC15hn1s2pxIPhC5KNhT9oGifkIyHTHuZGzajxZ9-OmP6p3EX5W8yhTbIVtiWvGjtDPUxWyuKZU1PtCN6PJdixedC2MjeIOn84mPkekw82gUa_rldNOKMC8mb1N0OG56BjyKEup_dpbv_AXFp3n-7TNkstdEKc7pflGyNRO81MkR9rhg0DICIpfOBgRBTo68T9IAWWM3o-Jyj68ttCHlHE4M8LFkhTRwkPe4rZ034SYf16rJHi_yFA3Nn00qVDFqEOmnJJ98EvjwimEM2euovrPD6cy-PV4CWLcIp65d-PrgIxc422p6VIKPDXVe28EiAG1HhwVoETf0umadLjbLo46aX18FGzUfvRly5AKl9JMiepFB3ddRoLKO44mXzTFC3K7sRyNbl6DLEDT8NMrkupZK1FT1IZ43NCGv6LlvFWQmLniHtlLklbY3KKdOzHuK3AvLU3r0xRNxNM8L1qaWye9ynoo01hX-2lv0_WTe8aePKwfEADnLbWn1UBYoJaSccXlYl0gK-390cJ0POpGjTFvb9Hu-b2af2qyl2TXY8L81Gy4VswMUypvWJek-DyNMmL2sJ35eAJeq1JTTa8=w517-h689-no?authuser=0"
              roundedCircle
              // thumbnail
            /> */}
          </div>
          <p className="about-research-p">
            According to the researchers at the University of California San
            <br></br>
            Diego's school of medicine, one dog year is not equal to seven human
            <br></br>
            years. The findings suggest a one-year-old puppy is actually about
            30
            <br></br>
            in “human years” – an age when humans, at least, might be expected
            to
            <br></br>
            have stopped running riot with the toilet paper.<br></br>
          </p>

          <a href="https://www.theguardian.com/lifeandstyle/2020/jul/02/every-human-year-not-equivalent-to-seven-dog-years-scientists-find?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts">
            how we calculate the age
          </a>
        </div>
        <div className="social-btns">
          <StyledSocialButton url="http://twitter.com/bhisheksah" />
          <StyledSocialButton url="https://www.instagram.com/tapforabhi/" />
          <StyledSocialButton url="https://github.com/Abhishek12345679" />
        </div>
      </div>
    </div>
  );
}

const MyPopup = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    /* width: 100px;
    display: flex; */
  }
  // use your custom style for ".popup-content"
  &-content {
    /* width: 10px; */
    height: 300px;
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;

const Form = styled.form`
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-top: 1em;
  background: #343a41;
  width: 400px;
  height: 300px;
  justify-content: center;
`;

const StyledSocialButton = styled(SocialIcon)`
  margin-bottom: 20px;
`;

export default App;
