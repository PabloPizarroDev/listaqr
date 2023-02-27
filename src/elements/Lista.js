import React from "react";
import styled from "styled-components";
import ShoppingCart from "../components/ShoppingCart";
import background from "../assets/img/pexels-quang-nguyen-vinh-2159065.jpg";

const Section = styled.section`
  width: 100%;
  height: auto;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
`;

const Lista = () => {
  return (
    <Section>
      <ShoppingCart />
    </Section>
  );
};

export default Lista;
