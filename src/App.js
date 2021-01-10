import React, { useRef } from "react";
import styled from 'styled-components';
import Layout from "./components/layout";
import CanvasContainer from "./containers/CanvasContainer";

const StyledMainContainer = styled.main``;
const StyledSectionContainer = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
`;

const App = () => {
  const inputRef = useRef();
  const buttonRef = useRef();
  const scrollRef = useRef();

  return (
    <>
    <Layout scrollRef={scrollRef}>
      <StyledMainContainer>
        <StyledSectionContainer ref={scrollRef}>
            <CanvasContainer inputRef={inputRef} buttonRef={buttonRef} />
        </StyledSectionContainer>
      </StyledMainContainer>
    </Layout>
    </>
  );
};

export default App;
