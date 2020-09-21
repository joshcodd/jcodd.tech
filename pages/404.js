import Layout from "../components/Layout";
import GlitchText from "../components/GlitchText";
import styled from "styled-components";

const ErrorStyled = styled(GlitchText)`
  position: relative;
  display: block;
  font-size: 50px;
`;

const FourStyled = styled(GlitchText)`
  position: relative;
  top: -70px;
  display: block;
  font-size: 150px;
`;

const NotFoundStyled = styled(GlitchText)`
  position: relative;
  top: -70px;
  display: block;
  font-size: 50px;
`;

const GlitchTextContainer = styled.div`
  position: relative;
  width: 250px;
  margin: auto;
  top: 30vh;
`;

function NotFound() {
  return (
    <Layout>
      <GlitchTextContainer>
        <ErrorStyled text="Error" />
        <FourStyled text="404" />
        <NotFoundStyled text="Not Found" />
      </GlitchTextContainer>
    </Layout>
  );
}

export default NotFound;
