import * as React from "react";
import styled from "styled-components";

const Container = styled.div``;

interface IProps {
  text: string;
}

const Button: React.SFC<IProps> = ({ text }) => (
  <Container>
    <button>{text}</button>
  </Container>
);

export default Button;
