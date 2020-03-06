import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import Hero from "../components/hero";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";
import Testimonials from "../components/testimonials";
import About from "../components/about";
import Details from "../components/details";
import Contact from "../components/contact";

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allContentfulBlogPost.edges");
    const [hero] = get(this, "props.data.contentfulPerson.edges");
    let about = {
      title: "We love ducks",
      description: "Certain ducks more than other ducks."
    };
    let details = {
      title: "Why choose us?",
      description: "We are a cool company"
    };
    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          <Hero data={hero} />
          <About data={about} />
          <Testimonials />
          {/* <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                );
              })}
            </ul>
          </div> */}
          <Details data={details} />
          <Contact />
        </div>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            description
          }
        }
      }
    }
    contentfulPerson(name: { eq: "Seth" }) {
      name
      shortBio {
        shortBio
      }
      title
      heroImage {
        fluid(
          maxWidth: 1180
          maxHeight: 480
          resizingBehavior: PAD
          background: "rgb:000000"
        ) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`;
