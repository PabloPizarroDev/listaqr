import React from "react";
import styled from "styled-components";
import CoverVideo from "../components/CoverVideo";
const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const Home = () => {
  return (
    <Section>
      <CoverVideo />
    </Section>
  );
};

export default Home;
