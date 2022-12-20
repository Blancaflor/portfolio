import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"

function Home() {
  return (
    <Layout>
      <SEO title="Examples" />
      <HeroSection />
    </Layout>
  )
}

export default Home
