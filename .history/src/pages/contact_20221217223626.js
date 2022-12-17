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
                       <input type="te"
                   </div>
              </div>
      </form>
    </Layout>
  )
}

export default Contact
