import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const [name, setName] = useState("");
  const [doggoAge, setDoggoAge] = useState("");
  const [humanAge, setHumanAge] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setDoggoAge(event.target.value);
  };

  const doggoToHumanAgeCalc = (event) => {
    const inHumanAge = 16 * Math.log(doggoAge) + 31;
    setHumanAge(inHumanAge);
    // alert(inHumanAge);
    event.preventDefault();
  };

  return (
    <div className="App">
      <h1 style={{ color: "#fff" }}>How Old is my Dog?</h1>
      <h4 style={{ fontFamily: "times-new-roman" }}>
        According to the researchers at the University of California San Diego’s
        school of medicine, one dog year is not equal to seven human years. The
        findings suggest a one-year-old puppy is actually about 30 in “human
        years” – an age when humans, at least, might be expected to have stopped
        running riot with the toilet paper.
      </h4>
      <a href="https://www.theguardian.com/lifeandstyle/2020/jul/02/every-human-year-not-equivalent-to-seven-dog-years-scientists-find?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts">
        See how we calculate the age
      </a>
      <Form onSubmit={doggoToHumanAgeCalc}>
        <label
          style={{ color: "#fff", textAlign: "left", justifyContent: "left" }}
        >
          Name
        </label>
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
        <input type="submit" value="Find Out" />
      </Form>
      {humanAge && (
        <div>
          <h2>
            {name} is {Math.floor(humanAge)} in hooman years
          </h2>
        </div>
      )}
    </div>
  );
}

const Form = styled.form`
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-top: 10em;
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
`;

export default App;
