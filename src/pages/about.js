import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <SEO title="About" />
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
