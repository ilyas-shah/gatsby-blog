import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default ({ data }) => {
  const post = data.contentfulBlogPost
  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />
      <div>
        <h1>{post.title}</h1>
        <p>{post.publishedDate}</p>
        {documentToReactComponents(post.body.json)}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      body {
        json
      }
      publishedDate(formatString: "ddd MMMM Do, YYYY")
    }
  }
`
