import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
    <h4>{data.allContentfulBlogPost.totalCount} Posts</h4>
    {data.allContentfulBlogPost.edges.map(({ node }) => (
      <div key={node.id}>
        <Link
          to={node.slug}
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <h3
            css={css`
              margin-bottom: ${rhythm(1 / 4)};
            `}
          >
            {node.title}{" "}
            <span
              css={css`
                color: #555;
              `}
            >
              — {node.publishedDate}
            </span>
          </h3>
          {/* <p>{node.excerpt}</p> */}
        </Link>
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          id
          slug
          title
          publishedDate(formatString: "ddd MMMM Do, YYYY")
        }
      }
      totalCount
    }
  }
`
