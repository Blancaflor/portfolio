import React from "react"
import emailjs from "emailjs-com"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <form onSubmit={sendEmail}>
              <div className="row pt-5 mx-auto">
                   <div className="col-8 form-group mx-auto">
                       <input type="text" className="form-control" placeholder="Name" name="name"/>
                   </div>
                   <div className="col-8 form-group pt-2 mx-auto">
                       <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                   </div>
                   <div className="col-8 form-group pt-2 mx-auto">
                       <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                   </div>
                   <div className="col-8 form-group pt-2 mx-auto">
                       <textarea className id="form-control" placeholder="Your message" name="message"/></textarea>
                   </div>
                   <div className="col-8 pt-3 mx-auto">
                       <input type="text" className="form-control" placeholder="Name" name="name"/>
                   </div>
              </div>
      </form>
    </Layout>
  )
}

export default Contact
