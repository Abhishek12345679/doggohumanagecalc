import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Popup from "reactjs-popup";

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
      <h1 style={{ color: "#fff" }}>How Old is my Dog?</h1>
      <div style={{ padding: 20, color: "#fff" }}>
        According to the researchers at the University of California San
        <br></br>
        Diego’s school of medicine, one dog year is not equal to seven human
        <br></br>
        years. The findings suggest a one-year-old puppy is actually about 30
        <br></br>
        in “human years” – an age when humans, at least, might be expected to
        <br></br>
        have stopped running riot with the toilet paper.<br></br>
      </div>
      <a href="https://www.theguardian.com/lifeandstyle/2020/jul/02/every-human-year-not-equivalent-to-seven-dog-years-scientists-find?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts">
        See how we calculate the age
      </a>

      <Form onSubmit={doggoToHumanAgeCalc}>
        {/* <label
          style={{ color: "#fff", textAlign: "left", justifyContent: "left" }}
        >
          Name
        </label> */}
        <Input
          type="text"
          id="name"
          placeholder="Dog's Name"
          value={name}
          onChange={nameChangeHandler}
        />

        <Input
          type="text"
          id="age"
          placeholder="Dog's Age"
          value={doggoAge}
          onChange={ageChangeHandler}
        />
        <input
          // disabled={name && doggoAge}
          type="submit"
          value="Find Out"
          style={{
            width: 320,
            height: 50,
            backgroundColor: "#c2c2c2",
            color: "#000",
            // shapeOutside: "none",
            border: "none",
            textAlign: "center",
            outline: "none",
          }}
        />
      </Form>
      <a
        class="bmc-button"
        target="_blank"
        href="https://www.buymeacoffee.com/abhisheksah"
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
          alt="Buy me a Tea"
        />
        <span style={{ marginLeft: 5, fontSize: 19 }}>Buy me a Tea</span>
      </a>
      <MyPopup
        open={showPopup}
        closeOnDocumentClick
        onClose={() => setShowPopup(false)}
      >
        <div className="modal">
          {/* <a className="close" onClick={() => setShowPopup(false)}>
            &times;
          </a> */}
          <h3>
            Your {name} is {Math.floor(humanAge)} years old
          </h3>
        </div>
      </MyPopup>
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
  background: #000;
  width: 400px;
  height: 300px;
  justify-content: center;
`;

const Input = styled.input`
  width: 300px;
  height: 35px;
  padding: 10px;
  margin-bottom: 25px;
  border: none;
  border-radius: 1px;
  text-align: center;
  outline: none;
`;

export default App;
