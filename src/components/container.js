import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
// import containerStyles from "./container.module.css"

export default ({ children }) => (
  /**
   * using css modules
   * <main className={containerStyles.container}>{children}</main>
   */

  /**
   * using CSS in JS
   */
  <main
    css={css`
      margin: 0 auto;
      max-width: 700px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    {children}
  </main>
)
