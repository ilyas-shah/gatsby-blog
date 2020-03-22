import React from "react"
import Container from "./container"
import Header from "./header"

export default ({ children }) => (
  <Container>
    <Header />
    {children}
  </Container>
)
