
import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import Layout from "gatsby-theme-carbon/src/components/Layout";
import Main from "gatsby-theme-carbon/src/components/Main";
import ArticleCard from "gatsby-theme-carbon/src/components/ArticleCard";
import { Row, Column }  from "gatsby-theme-carbon/src/components/Grid";

export default function Foobar({ data }) {
  return(
    <Layout
      pageTitle={"Today's WOD"}
    >
      <Main>
        <h2 style={{marginTop: "2rem"}}>Archive</h2>
        <Row style={{flexWrap: "wrap"}}>
            {data.allMdx.edges.sort((a, b) => b.node.frontmatter.publish_time.localeCompare(a.node.frontmatter.publish_time)).map((e, k) => 
            <Column
                key={k} 
                colMd={3} colLg={3} noGutterMdLeft
            >
                <ArticleCard 
                    title={e.node.frontmatter.title} 
                    date={e.node.frontmatter.publish_time} 
                    href={e.node.slug}
                />
            </Column>
            )}
        </Row>
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
        slug
      }
    }
  }
}
`
