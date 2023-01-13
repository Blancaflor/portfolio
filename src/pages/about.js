import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import styled, { keyframes } from "styled-components"
import WaveBackground from "../components/backgrounds/WaveBackground"
import { themes } from "../components/styles/ColorStyles"
import { H1, H2, MediumText } from "../components/styles/TextStyles"
import AboutAnimation from "../components/animations/AboutAnimation"

function About() {
  return (
    <Layout>
      <Wrapper>
        <SEO title="About" />
        <WaveBackground />
        <ContentWrapper>
          <TextWrapper>
            <Title>
              Where
              <br />
              did
              <br />
              it
              <br />
              all <AboutAnimation />
            </Title>
            {/*} <Description>From the beginning.</Description> */}
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
      <Wrapper2>
        <ContentWrapper2>
          <TextBackGround>
            <h1>Our</h1>
            <p>Values</p>
            <IconWrapper>
              <Icon1 src="/images/animations/html.png" className="icon" />
              <Ring src="/images/icons/icon-ring.svg" />
            </IconWrapper>
            <IconWrapper>
              <Icon2 src="/images/animations/css.png" className="icon" />
              <Ring src="/images/icons/icon-ring.svg" />
            </IconWrapper>
            <IconWrapper>
              <Icon3 src="/images/animations/js.png" className="icon" />
              <Ring src="/images/icons/icon-ring.svg" />
            </IconWrapper>
            <IconWrapper>
              <Icon4 src="/images/animations/react.png" className="icon" />
              <Ring src="/images/icons/icon-ring.svg" />
            </IconWrapper>
          </TextBackGround>
          <TextBackGround2>
            <Text>
              <TextTitle>
                <h1>Tools we use to make your website.</h1>
              </TextTitle>
              <br />
              <TextTitle2>
                Web Development: Crafting Digital Experiences.
              </TextTitle2>
              <h2>HTML (HyperText Markup Language)</h2>
              <p>
                Is a markup language used to create the structure and layout of
                a webpage. It uses tags to define elements such as headings,
                paragraphs, and links.
              </p>
              <h2>CSS (Cascading Style Sheets) </h2>
              <p>
                Is a stylesheet language used to control the appearance of the
                content on a webpage. It is used to define things like colors,
                fonts, and layout.
              </p>
              <h2>JavaScript</h2>
              <p>
                Is a programming language that is used to add interactive
                features to websites. It is often used to create things like
                drop-down menus, pop-ups, and other interactive elements.
              </p>
              <h2>React.js</h2>
              <p>
                Is a JavaScript library for building user interfaces. It is used
                to create reusable UI components and improve the performance of
                web applications. React allows developers to create large web
                applications that can change data, without reloading the page.
                It is often used for building single-page applications and
                mobile applications.
              </p>
            </Text>
          </TextBackGround2>
        </ContentWrapper2>
      </Wrapper2>
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

const Wrapper2 = styled.div`
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
    gap: 40px;
    padding: 150px 20px 250px;
  }

  @media (max-width: 338px) {
    grid-template-columns: 100px auto;
    gap: 30px;
    padding: 100px 20px 250px;
  }
`

const ContentWrapper2 = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 2560px) {
    grid-template-columns: 400px auto;
    gap: 60px;
    padding: 100px 20px 250px;
  }
  @media (max-width: 1920px) {
    grid-template-columns: 390px auto;
    gap: 80px;
    padding: 100px 0 250px;
  }
  @media (max-width: 1600px) {
    grid-template-columns: 380px auto;
    gap: 60px;
    padding: 100px 20px 250px;
  }
  @media (max-width: 1440px) {
    grid-template-columns: 360px auto;
    gap: 60px;
    padding: 100px 20px 250px;
  }
  @media (max-width: 1360px) {
    grid-template-columns: 340px auto;
    gap: 60px;
    padding: 100px 20px 250px;
  }
  @media (max-width: 1280px) {
    grid-template-columns: 300px auto;
    gap: 60px;
    padding: 100px 20px 250px;
  }

  @media (max-width: 960px) {
    grid-template-columns: 220px auto;
    gap: 60px;
    padding: 100px 20px 250px;
  }

  @media (max-width: 720px) {
    grid-template-columns: 180px auto;
    gap: 60px;
    padding: 100px 20px 250px;
  }

  @media (max-width: 540px) {
    grid-template-columns: 150px auto;
    gap: 40px;
    padding: 100px 20px 250px;
  }

  @media (max-width: 450px) {
    grid-template-columns: 120px auto;
    gap: 30px;
    padding: 100px 20px 250px;
  }

  @media (max-width: 338px) {
    grid-template-columns: 100px auto;
    gap: 20px;
    padding: 100px 20px 250px;
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


const TextBackGround = styled.div`
  box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
  backdrop-filter: blur(21.8507px);
  border-radius: 16px;
  opacity: 90%;
  height: 500px;
  display: inline-grid;
  grid-auto-flow: row dense;

  @media (max-width: 1360px) {
    height: 100%;
  }

  @media (max-width: 1280px) {
    height: 100%;
  }

  @media (max-width: 960px) {
    height: 100%;
  }

  @media (max-width: 720px) {
    height: 100%;
  }

  @media (max-width: 540px) {
    height: 90%;
  }

  @media (max-width: 450px) {
    height: 85%;
  }

  @media (max-width: 338px) {
    height: 75%;
  }

  h1{
    color: white;
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }

  p{
    color: white;
    font-weight: bold;
    font-size: 90%;
    text-align: center;
  }
`

const Icon1 = styled.img`
  width: 64px;
  height: 64px;
  grid-column-start: 1;
`

const Icon2 = styled.img`
  width: 64px;
  height: 64px;
  grid-column-start: 1;
`

const Icon3 = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  grid-column-start: 1;
`
const Icon4 = styled.img`
  width: 64px;
  height: 64px;
  grid-column-start: 1;
`

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 30px 60px rgba(23, 0, 102, 0.5),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);

    .icon {
        transform: scale(1.2);
    }
  }

  ${Wrapper}:hover & {
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }
`

const Ring = styled.img`
  position: absolute;
  top: -30px;
  left: -25px;
  width: 127px;
  height: 127px;
  display: grid;
  align-content: justify;

  ${IconWrapper}:hover & {
    transform: rotate(30deg) scale(1.2) translate(1px, 1px);
  }
`

const TextBackGround2 = styled.div`
  box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
  backdrop-filter: blur(21.8507px);
  border-radius: 16px;
  padding: 0 20px 0 20px;
  margin: : 0 20px 0 20px;
  opacity: 90%;

  h1{
    font-weight: bold;
    font-size: 140%;
  }

  h2{
    font-weight: bold;
    font-size: 110%;
  }
`

const Text = styled.p`
  color: ${themes.dark.text1};
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 15px;
  line-height: 30px;
  margin: 0 0 24px;
  text-align: left;
  padding-bottom: 20px;
`

const TextTitle = styled(H1)`
  color: ${themes.dark.text1};
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 960px) {
    font-size: 30px;
  }

  @media (max-width: 720px) {
    font-size: 27px;
  }

  @media (max-width: 540px) {
    font-size: 21px;
  }

  @media (max-width: 450px) {
    font-size: 18px;
  }
`
const TextTitle2 = styled(H2)`
  color: ${themes.dark.text1};
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 18px;
  text-align: left;
  text-transform: uppercase;

  @media (max-width: 960px) {
    font-size: 18px;
  }

  @media (max-width: 720px) {
    font-size: 16px;
  }

  @media (max-width: 540px) {
    font-size: 16px;
  }

  @media (max-width: 450px) {
    font-size: 14px;
  }
`

{
  /* const Description = styled(MediumText)`` */
}
