import React from 'react';
import SEO from "../components/layout/seo"
import styled, { keyframes } from "styled-components"
import WaveBackground from "../components/backgrounds/WaveBackground"
import { themes } from "../components/styles/ColorStyles"
import { H1, MediumText } from "../components/styles/TextStyles"
import TextAnimation from "../components/animations/TextAnimation"
import TextAnimation2 from "../components/animations/TextAnimation2"

function About() {
  return (
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
          <Description>Welcome on our Digital Platform</Description>
    
        </TextWrapper>
        <TextWrapper>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            semper laoreet ante nec aliquet. Curabitur ac risus velit. Mauris et
            faucibus lacus. Nulla tempus massa ac lectus aliquet consequat.
            Vivamus porttitor, turpis vel ultricies posuere, nunc ex pulvinar
            ex, eu blandit ex nisi eget ante. Cras in quam quis orci dapibus
            ultricies vitae ut tortor. Fusce at viverra tellus. Nulla vitae dui
            sodales, imperdiet lacus et, tempus purus. Pellentesque a dictum
            est. Nulla venenatis ac dolor ut interdum. Suspendisse lobortis
            dolor quis libero blandit, ut blandit est venenatis. Fusce aliquam
            laoreet consequat. Mauris sollicitudin lacinia eros non vehicula.
            Vivamus mollis ultrices nunc, in tincidunt nisi elementum ut. Proin
            egestas tempor enim, ut consectetur nibh vehicula ut. Mauris aliquam
            pellentesque mi efficitur suscipit. Sed at mi sit amet eros tempor
            tincidunt. Nulla at magna non lorem venenatis ultricies mollis a
            libero. Nam ultricies mi et tristique volutpat. Nullam nec dui ex.
            Nam feugiat odio eleifend augue scelerisque commodo. Curabitur
            dictum sapien sed ipsum maximus, a imperdiet ex consequat. Sed a
            arcu eget tortor convallis dapibus non ac quam. Quisque nisl turpis,
            laoreet id lacinia non, iaculis vel nunc.
          </Text>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
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
  font-size: 24px;
`

const Description = styled(MediumText)``
