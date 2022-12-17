import React from "react"
import emailjs from "emailjs-com"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'YOUR_TEMPLATE_ID', form.current, 'U1ZKe3G9J3WB7krWW')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <Wrapper>
        <WaveBackground />
        <ContentWrapper>
          <TextWrapper>
            <Title>
              We
              <br />
              design
              <br /> and <span>code</span> your <span>website</span>.
            </Title>
            <Description>Welcome on our Digital Platform</Description>
            <PurchaseButton
              title="Make An Appointment"
              subtitle="Send us an email!"
            />
          </TextWrapper>
          <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input type="text" className="form-control" placeholder="Name" name="name" />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input type="email" className="form-control" placeholder="Email Address" name="email" />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input type="text" className="form-control" placeholder="Subject" name="subject" />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
              </div>
              <div className="col-8 pt-3 mx-auto">
                <input type="submit" className="btn btn-info" value="Send Message"></input>
              </div>
            </div>
          </form>
        </ContentWrapper>
      </Wrapper>
    </Layout >
  )
}


const Wrapper = styled.div`
  overflow: hidden;
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
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

  @media (max-width: 450px) {
    font-size: 48px;
  }
`



