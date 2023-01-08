import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import styled, { keyframes } from "styled-components"
import WaveBackground from "../components/backgrounds/WaveBackground"
import { themes } from "../components/styles/ColorStyles"
import { H1, H2, MediumText } from "../components/styles/TextStyles"
import AboutAnimation from "../components/animations/AboutAnimation"
import AboutIcons from "../components/animations/AboutIcons"

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
              all <AboutAnimation />.
            </Title>
            {/*} <Description>From the beginning.</Description> */}
          </TextWrapper>
        </ContentWrapper>   
      </Wrapper>
      <Wrapper2>
      <ContentWrapper2>
        <TextBackGround>
          <AboutIcons />
        </TextBackGround>
        <TextBackGround2>
            <Text>
              <TextTitle>
                This is what (Next Gen Solutions) stands for.
              </TextTitle>
              <TextTitle2>Dit is wat NGS - (Next Gen Solutions) dagdagelijks uitwerkt.</TextTitle2>
              <br />
              Dag in en dag uit streven we naar de beste ontwikkelingen, code te
              consumeren en te programmeren.
              <br />
              <br />
              Onze filosofie is met de state of mind naar voornamelijk
              efficiëntie, technisch sterk onderbouwing en naar sterke management
              toegericht.
              <br />
              <br />
              Webontwikkeling is het proces van het maken en onderhouden van websites en webapplicaties.
              Het omvat een verscheidenheid aan technische vaardigheden, waaronder codeertalen zoals HTML, CSS en JavaScript, evenals databasebeheer en server-side scripting.
              <br />
              <br />
              Het hebben van een sterke technische basis is essentieel voor webontwikkelaars, omdat ze hiermee websites kunnen bouwen en onderhouden die betrouwbaar, schaalbaar en efficiënt zijn.
              Dit omvat een goed begrip van computerwetenschappelijke principes, evenals de nieuwste technologieën en best practices in het veld.
              <br />
              <br />
              Design is ook een belangrijk aspect van webontwikkeling, omdat het de look en feel van een website of applicatie bepaalt.
              Webontwikkelaars werken nauw samen met ontwerpers om ervoor te zorgen dat de gebruikerservaring visueel aantrekkelijk en intuïtief is.
              <br />
              <br />
              Efficiëntie is van cruciaal belang bij webontwikkeling, omdat het ervoor zorgt dat websites en applicaties goed presteren en grote hoeveelheden verkeer aankunnen.
              Webontwikkelaars moeten code en systemen kunnen optimaliseren om de prestaties te maximaliseren en downtime te minimaliseren.
              <br />
              <br />
              Effectief beheer is ook de sleutel tot succesvolle webontwikkelingsprojecten.
              Dit omvat het coördineren met teamleden, het opstellen van tijdlijnen en budgetten en ervoor zorgen dat alle belanghebbenden op één lijn liggen met de projectdoelen.
              <br />
              <br />
              <hr></hr>
              <TextTitle2>This is what NGS - Next Gen Solutions stands for.</TextTitle2>
              <br />
              Day in and day out we want to strive for the best developments, code to consume
              and programming.
              <br />
              <br />
              Our philosophy is with the state of mind mainly
              towards efficiency, strong technical support and strong management.
              <br />
              <br />
              Web development is the process of creating and maintaining websites and web applications. It involves a variety of technical skills, including coding languages such as HTML, CSS, and JavaScript, as well as database management and server-side scripting.
              <br />
              <br />
              Having a strong technical foundation is essential for web developers, as it allows them to build and maintain websites that are reliable, scalable, and efficient. This includes an understanding of computer science principles, as well as the latest technologies and best practices in the field.
              <br />
              <br />
              Design is also an important aspect of web development, as it determines the look and feel of a website or application. Web developers work closely with designers to ensure that the user experience is visually appealing and intuitive.
              <br />
              <br />
              Efficiency is critical in web development, as it ensures that websites and applications perform well and can handle large amounts of traffic. Web developers must be able to optimize code and systems to maximize performance and minimize downtime.
              <br />
              <br />
              Effective management is also key to successful web development projects. This includes coordinating with team members, setting timelines and budgets, and ensuring that all stakeholders are aligned on the project goals.
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
    gap: 60px;
    padding: 150px 20px 250px;
  }

  @media (max-width: 338px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`

const ContentWrapper2 = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 2560px) {
    grid-template-columns: 400px auto;
    gap: 60px;
    padding: 100px 20px 250px;
  }
  @media (max-width: 1920px) {
    grid-template-columns: 360px auto;
    gap: 80px;
    padding: 100px 0 250px;
  }
  @media (max-width: 1600px) {
    grid-template-columns: 320px auto;
    gap: 60px;
    padding: 100px 20px 250px;
  }
  @media (max-width: 1440px) {
    grid-template-columns: 300px auto;
    gap: 60px;
    padding: 100px 20px 250px;
  }
  @media (max-width: 1360px) {
    grid-template-columns: 250px auto;
    gap: 60px;
    padding: 100px 20px 250px;
  }
  @media (max-width: 1280px) {
    grid-template-columns: 200px auto;
    gap: 60px;
    padding: 100px 20px 250px;
  }

  @media (max-width: 960px) {
    grid-template-columns: 0px auto;
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
  background: rgba(46, 46, 46);
  box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
  backdrop-filter: blur(21.8507px);
  border-radius: 16px;
  padding: 0 20px 0 20px;
  opacity: 90%;
`

const TextBackGround2 = styled.div`
  background: rgba(46, 46, 46);
  box-shadow: 0px 8.19119px 16.3824px rgba(0, 0, 0, 0.1),
  backdrop-filter: blur(21.8507px);
  border-radius: 16px;
  padding: 0 20px 0 20px;
  opacity: 90%;
`

const Text = styled.p`
  color: ${themes.dark.text1};
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 15px;
  line-height: 21px; 
  margin: 0 0 24px; 
  text-align: left;
`

const TextTitle = styled(H1)`
  color: ${themes.dark.text1};
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 27px;
  text-align: center;
  margin: 10px auto 10px;

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
  margin: 30px auto 10px;
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

{/* const Description = styled(MediumText)`` */}
