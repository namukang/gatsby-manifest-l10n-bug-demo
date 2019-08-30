import React from "react"
import { Link } from "gatsby"

function IndexPage() {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
      }}
    >
      Hello World!
      <br />
      <Link to="/es/">Spanish</Link>
    </div>
  )
}

export default IndexPage
