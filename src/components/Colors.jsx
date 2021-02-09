import { Fragment, useState } from "react";
import axios from "axios";
import Button from "components/Button";
import Input from "components/Input";

const getRandomColorFromApi = async () => {
  const response = await axios.get(
    `http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`
  );

  if (response && response.data) {
    return response.data.new_color;
  }
  return null;
};

export default function Colors(props) {
  const [buttonText, setButtonText] = useState("Get random color");
  const [currentColor, setCurrentColor] = useState("b22222");
  const [colorHistory, setColorHistory] = useState([]);

  const handleOnClick = async () => {
    const newColor = await getRandomColorFromApi();
    setCurrentColor(newColor);
    setColorHistory([currentColor, ...colorHistory]);
  };

  return (
    <Fragment>
      <Button value={buttonText} color={currentColor} onClick={handleOnClick} />

      {colorHistory.map((color, ix) => (
        <div key={ix}>#{color}</div>
      ))}

      <Input
        value={buttonText}
        onChange={(event) => {
          setButtonText(event.target.value);
        }}
      />
    </Fragment>
  );
}
