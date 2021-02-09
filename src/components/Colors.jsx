import { Fragment, useState } from "react";
import axios from "axios";
import Button from "components/Button";
import Input from "components/Input";
import ColorItem from "components/ColorItem";
import styled from "styled-components";

const move = (array, oldIndex, newIndex) => {
  if (newIndex >= array.length) {
    newIndex = array.length - 1;
  }
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
  return array;
};

const getRandomColorFromApi = async () => {
  const response = await axios.get(
    `http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`
  );

  if (response && response.data) {
    return response.data.new_color;
  }
  return null;
};

const ColorRow = styled.div``;

export default function Colors(props) {
  const [buttonText, setButtonText] = useState("Get random color");
  const [currentColor, setCurrentColor] = useState("b22222");
  const [colorHistory, setColorHistory] = useState([]);
  const [customColor, setCustomColor] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleOnClick = async () => {
    const newColor = await getRandomColorFromApi();
    if (!newColor.length) {
      alert("FETCHED COLOR VALUE IS EMPTY");
      return;
    }

    setCurrentColor(newColor);
    if (!colorHistory.includes(currentColor)) {
      setColorHistory([currentColor, ...colorHistory]);
    }
  };

  const handleColorMove = (position, newPosition) => {
    let colors = [...colorHistory];
    move(colors, position, newPosition);
    setColorHistory(colors);
  };

  const validateInput = (input) => {
    const re = new RegExp("^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");
    return re.test(input);
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      if (!validateInput(customColor)) {
        setErrorMessage("Invalid color value");
        return;
      }

      if (!colorHistory.includes(currentColor)) {
        setColorHistory([currentColor, ...colorHistory]);
      }
      setCurrentColor(customColor);
      setErrorMessage("");
    }
  };

  return (
    <Fragment>
      <Button value={buttonText} color={currentColor} onClick={handleOnClick} />
      <Input
        value={buttonText}
        onChange={(event) => {
          setButtonText(event.target.value);
        }}
      />

      {colorHistory.map((color, index) => (
        <ColorRow key={index}>
          <ColorItem value={color} bold={color === currentColor} />
          {index !== 0 && (
            <Button
              value="▲"
              onClick={() => handleColorMove(index, index - 1)}
            />
          )}
          {index !== colorHistory.length - 1 && (
            <Button
              value="▼"
              onClick={() => handleColorMove(index, index + 1)}
            />
          )}
        </ColorRow>
      ))}

      <Input
        placeholder="Add custom color"
        onChange={(event) => {
          setCustomColor(event.target.value);
        }}
        onKeyDown={handleOnKeyDown}
      />
      {errorMessage && <div>{errorMessage}</div>}
    </Fragment>
  );
}
