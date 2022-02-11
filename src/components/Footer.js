import React from "react";
import { Container } from "../styled/Container";
import { Heading } from "../styled/Heading";
import { Wrapper } from "../styled/Wrapper";

const Footer = () => {
  return (
    <>
      <Container bg="black">
        <Wrapper ai="center" style={{height: "20vh"}}>
          <Heading  fs="1.9rem" style={{color: "yellow", margin: '0' }}>Footer</Heading>
        </Wrapper>
      </Container>
    </>
  );
};

export default Footer;
