import React from "react"
import emailjs from "emailjs-com"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"

function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <form id="form">
        <div class="field">
          <label for="subject">subject</label>
          <input type="text" name="subject" id="subject">
        </div>
        <div class="field">
          <label for="email">email</label>
          <input type="text" name="email" id="email">
        </div>
        <div class="field">
          <label for="message">message</label>
          <input type="text" name="message" id="message">
        </div>
        <div class="field">
          <label for="reply_to">reply_to</label>
          <input type="text" name="reply_to" id="reply_to">
        </div>

        <input type="submit" id="button" value="Send Email" >
      </form>
    </Layout>
  )
}

export default Contact
