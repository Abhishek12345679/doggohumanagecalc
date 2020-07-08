import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Popup from "reactjs-popup";

import { Navbar, Nav, InputGroup, FormControl, Button } from "react-bootstrap";

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
    if (!!doggoAge && !!name && !isNaN(doggoAge)) {
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
          expand="xl"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Navbar.Brand href="#home">DoggAge</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#changes">Changes</Nav.Link>
              <Nav.Link href="#donate">Donate</Nav.Link>
            </Nav>
            <Nav>
              ` <Nav.Link href="#deets">About</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Contact
              </Nav.Link>
              `
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
          According to the researchers at the University of California San
          Diego's
          <br></br>
          school of medicine, one dog year is not equal to seven human
          <br></br>
          years. The findings suggest a one-year-old puppy is actually about 30
          <br></br>
          in “human years” – an age when humans, at least, might be expected to
          <br></br>
          have stopped running riot with the toilet paper.<br></br>
          <a href="https://www.theguardian.com/lifeandstyle/2020/jul/02/every-human-year-not-equivalent-to-seven-dog-years-scientists-find?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts">
            how we calculate the age
          </a>
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

export default App;
