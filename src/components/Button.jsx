import React from "react";
import styled from "styled-components";

const StyledButton = styled.input`
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
  margin: 4px;
`;

export default function Button(props) {
  const { ...rest } = props;

  return <StyledButton type="button" {...rest} />;
}
