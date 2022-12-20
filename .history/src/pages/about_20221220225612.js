import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import styled, { keyframes } from "styled-components"
import WaveBackground from "../components/backgrounds/WaveBackground"
import { themes } from "../components/styles/ColorStyles"
import { H1, MediumText } from "../components/styles/TextStyles"
import TextAnimation from "../components/animations/TextAnimation"
import TextAnimation2 from "../components/animations/TextAnimation2"

function About() {
  return (
    <Layout>
      <Wrapper>
        <SEO title="About" />
        <WaveBackground />
        <ContentWrapper>
          <TextWrapper>
            <Title>
              We
              <br />
              design
              <br /> and <TextAnimation /> your <TextAnimation2 />.
            </Title>
            <Description>Where did it all start?</Description>
          </TextWrapper>
          <Text>
            Dit is wat NGS - Next Gen Solutions dagdagelijks doet. Dag in en dag
            uit willen we en streven we naar de beste: Ontwikkelingen, Code te
            consumeren en te programmeren.
            <br />
            <br />
            Onze filosofie is met de state of mind naar voornamelijk
            efficiëntie, technisch sterk onderbouwing en naar sterke management
            toegericht.
            <br />
            <br />
            More Info To Come!
            <br />
            <br />
            This is what NGS - Next Gen Solutions does every day. Day in and day
            out we want and strive for the best: Developments, Code to consume
            and programming. 
            <br />
            <br />
            Our philosophy is with the state of mind mainly
            towards efficiency, strong technical support and strong management.
            <br />
            <br />
            More Info To Come!
          </Text>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}

export default About

const animation = keyframes`
  from { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  to { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const Wrapper = styled.div`
  overflow: hidden;
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 2560px) {
    grid-template-columns: 400px auto;
    gap: 60px;
    padding: 250px 20px 250px;
  }
  @media (max-width: 1920px) {
    grid-template-columns: 360px auto;
    gap: 80px;
    padding: 250px 0 250px;
  }
  @media (max-width: 1600px) {
    grid-template-columns: 320px auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
  @media (max-width: 1440px) {
    grid-template-columns: 300px auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
  @media (max-width: 1360px) {
    grid-template-columns: 250px auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
  @media (max-width: 1280px) {
    grid-template-columns: 200px auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }

  @media (max-width: 960px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }

  @media (max-width: 720px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }

  @media (max-width: 540px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }

  @media (max-width: 338px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%),
    linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 1280px) {
    font-size: 50px;
  }

  @media (max-width: 960px) {
    font-size: 45px;
  }

  @media (max-width: 720px) {
    font-size: 40px;
  }

  @media (max-width: 540px) {
    font-size: 35px;
  }

  @media (max-width: 450px) {
    font-size: 30px;
  }
`

const Text = styled.p`
  color: ${themes.dark.text1};
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 18px;
  
`

const Description = styled(MediumText)``
