import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import Layout from "gatsby-theme-carbon/src/components/Layout";
import Main from "gatsby-theme-carbon/src/components/Main";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Foobar({ data }) {
  const [wod, setWOD] = useState(null);

  useEffect(() => {
    const today = new Date();
    // Get all WODs that happened on this date
    let wod = data.allMdx.edges[Math.floor(Math.random() * data.allMdx.edges.length)];
    setWOD(wod.node);
  }, [])
  return(
    <Layout
      pageTitle={"Today's WOD"}
    >
      <p style={{margin: "24px"}}>Example</p>
      <Main>
        <h3>{wod?.frontmatter.title.split(',')[1] || "Loading"}</h3>
        <ReactMarkdown children=
        {wod?.rawBody
          .split("---")[2]
          .split("\n")
          .filter(x => x.length > 2)
          .join("\n\n")
        } />
      </Main>
    </Layout>
  )
}

export const query = graphql`
    query {
      allMdx(filter: {frontmatter: {publish_time: {ne: null}}}) {
    edges {
      node {
        frontmatter {
          publish_time(formatString: "YYYY-MM-DD")
          title
        }
        rawBody
      }
    }
  }
    }
`
