import React from "react";
import { Button } from "antd";
import styled from "styled-components";

const StyledButton = styled(Button)`
  font-size: 0.7rem;
  margin: 0 2px;
`;

const CustomButton = ({ children, ...props }) => (
  <StyledButton size="small" {...props}>
    {children}
  </StyledButton>
);

export default CustomButton;
