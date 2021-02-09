import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

const Button = styled.input`
  border-radius: 3px;
  height: 32px;
  width: 200px;
  border: none;
  color: #${(props) => (props.color ? props.color : "808080")};
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const getRandomColorFromApi = async () => {
  const response = await axios.get(
    `http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`
  );

  if (response && response.data) {
    return response.data.new_color;
  }
  return null;
};

function App() {
  const [currentColor, setCurrentColor] = useState("B22222");

  const handleOnClick = async () => {
    const newColor = await getRandomColorFromApi();
    setCurrentColor(newColor);
    console.log(newColor);
    console.log("CLICK");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Button
          readOnly
          value={"Get random color"}
          color={currentColor}
          onClick={handleOnClick}
        />
      </header>
    </div>
  );
}

export default App;
