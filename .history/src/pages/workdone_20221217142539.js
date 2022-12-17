import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"

function w() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
    </Layout>
  )
}

export default w
