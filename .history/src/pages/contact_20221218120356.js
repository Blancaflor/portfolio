import React from 'react';
import emailjs from "emailjs-com"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import styled, { keyframes } from "styled-components"
import MockupAnimation from "../animations/MockupAnimation"
import WaveBackground from "../backgrounds/WaveBackground"
import PurchaseButton from "../buttons/PurchaseButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_v7mx0pr', 'template_s8p11gi', e.target, 'U1ZKe3G9J3WB7krWW')
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


