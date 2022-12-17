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
        
      </ContentWrapper>
    </Wrapper>
      
    </Layout >
  )
}


