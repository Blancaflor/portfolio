import React from "react"
import emailjs from "emailjs-com"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <form onSubmit={sendEmail}>
              <div className="row"
      </form>
    </Layout>
  )
}

export default Contact
