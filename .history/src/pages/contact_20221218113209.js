import React from 'react';
import emailjs from "emailjs-com"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

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
      <form className="Form" onSubmit={sendEmail}>
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
    </Layout >
  )
}

.Form 
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;
