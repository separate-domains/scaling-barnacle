import React from "react"
import { graphql } from "gatsby"
import { Layout, Container, SEO } from "../components"

const IndexPage = ({ data: { allInstaNode } }) => (
  <Layout>
    <SEO />
    <Container
      nodes={allInstaNode}
    />
  </Layout>
)

export const pageQuery = graphql`
  query ScrapingQuery {
    allInstaNode(filter: { username: { eq: "fullname7274" } }, sort: {order: DESC, fields: timestamp}) {
      edges {
        node {
          id
          username
          likes
          caption
          comments
          timestamp
          localFile {
            childImageSharp {
              fluid(quality: 70, maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
