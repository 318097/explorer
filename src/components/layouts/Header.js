import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  font-weight: bold;
  margin-bottom: 7px;
  margin-top: 3px;
  span {
    font-size: 1.1rem;
  }
`;

const Header = () => (
  <StyledHeader>
    <span className="underline">Explorer</span>
  </StyledHeader>
);

export default Header;
