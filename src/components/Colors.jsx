import { Fragment, useState } from "react";
import axios from "axios";
import Button from "components/Button";

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
  const [currentColor, setCurrentColor] = useState("B22222");

  const handleOnClick = async () => {
    const newColor = await getRandomColorFromApi();
    setCurrentColor(newColor);
  };
  return (
    <Fragment>
      <Button
        value={"Get random color"}
        color={currentColor}
        onClick={handleOnClick}
      />
    </Fragment>
  );
}
