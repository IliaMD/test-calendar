import React from "react";
import styled from "styled-components";
import { Drawer, MyCalendar } from "./components";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <Wrapper>
        <Drawer />
        <Container>
          <MyCalendar />
        </Container>
      </Wrapper>
    </RecoilRoot>
  );
};

export default App;

const Wrapper = styled.div`
  height: 100vh;
  font-family: "Poppins", sans-serif;
  display: flex;
`;

const Container = styled.div`
  background-color: #2d224c;
  width: 100vw;
`;
