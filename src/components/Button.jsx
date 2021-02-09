import React from "react";
import styled from "styled-components";

const StyledButton = styled.input`
  background-color: whitesmoke;
  border-radius: 3px;
  height: 32px;
  width: 200px;
  border: none;
  color: #${(props) => (props.color ? props.color : "808080")};
  text-align: center;
  text-shadow: 1px 1px darkgray;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background-color: #61dafb;
  }
  margin: 4px;
`;

export default function Button(props) {
  const { ...rest } = props;

  return <StyledButton type="button" {...rest} />;
}
