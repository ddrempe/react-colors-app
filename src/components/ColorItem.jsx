import React from "react";
import styled from "styled-components";

const StyledColorItem = styled.span`
  color: #${(props) => (props.value ? props.value : "fff")};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  margin: 8px;
`;

export default function ColorItem(props) {
  const { value, ...rest } = props;

  return (
    <StyledColorItem value={value} {...rest}>
      #{value}
    </StyledColorItem>
  );
}
