import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border-radius: 1px;
  height: 32px;
  width: 200px;
  border: none;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin: 8px;
`;

export default function Input(props) {
  const { ...rest } = props;

  return <StyledInput type="text" {...rest} />;
}
