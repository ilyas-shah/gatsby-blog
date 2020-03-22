import React from "react"
import Nav from "./nav"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { Link, useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log(data)
  return (
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        {/* <h3 style={{ display: `inline` }}>MySweetSite</h3> */}
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Nav />
    </header>
  )
}
