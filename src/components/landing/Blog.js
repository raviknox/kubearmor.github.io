import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

const Blog = () => {
  const query = useStaticQuery(graphql`
    query {
      blog1: file(relativePath: { eq: "Blog/blog_one.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      blog2: file(relativePath: { eq: "Blog/blog_two.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      blog3: file(relativePath: { eq: "Blog/blog_three.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      arrow: file(relativePath: { eq: "Blog/arrow.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <div>
      <section id="blog" className="pt-20 pb-10">
        <div className="container mx-auto">
          <h1 className="font-weight-bold text-center" style={{ color: '#0B4296' }}>
            Blogs
          </h1>
          <div className="card-deck  pt-20">
            <div className="card blogs-cards">
              <Img
                fluid={query.blog1.childImageSharp.fluid}
                alt="Restrict the behavior of containers at the system level"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#0B4296', fontWeight: 'bold' }}>
                  An Introduction to Kubernetes Security using KubeArmor
                </h5>
                <p className="card-text">LSM hooks in Linux Kernel mediates access to internal</p>
                <a
                  href="https://blog.accuknox.com/an-introduction-to-kubernetes-security-using-kubearmor/"
                  target="_blank"
                  className="card-text"
                >
                  <small style={{ color: '#3B76EF' }}>Read More</small>
                </a>
              </div>
            </div>
            <div className="card blogs-cards">
              <Img
                fluid={query.blog2.childImageSharp.fluid}
                alt="Restrict the behavior of containers at the system level"
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  className="card-title"
                  style={{ color: '#0B4296', fontWeight: 'bold' }}
                >
                  Security Policy Depolyment in multiUbuntu with KubeArmor
                </h5>
                <p className="card-text">
                  KubeArmor, a container-aware runtime security enforcement system
                </p>
                <a
                  href="https://blog.accuknox.com/kubearmor-policy-deployment-in-a-sample-workload/"
                  target="_blank"
                  className="card-text"
                >
                  <small style={{ color: '#3B76EF' }}>Read More</small>
                </a>
              </div>
            </div>
            <div className="card blogs-cards">
              <Img
                fluid={query.blog3.childImageSharp.fluid}
                alt="Restrict the behavior of containers at the system level"
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  className="card-title"
                  style={{ color: '#0B4296', fontWeight: 'bold' }}
                >
                  What is KubeArmor and how does it compare with Falco, and Tracee?
                </h5>
                <p className="card-text">
                  In recent times organizations are migrating from on-premise to cloud,
                </p>
                <a
                  href="https://blog.accuknox.com/kubearmor-vs-falco-vs-tracee/"
                  target="_blank"
                  className="card-text"
                >
                  <small style={{ color: '#3B76EF' }}>Read More</small>
                </a>
              </div>
            </div>
          </div>
          <div className="row " style={{ alignItems: 'center', justifyContent: 'center' }}>
            <a
              href="https://blog.accuknox.com/tag/kubearmor/"
              target="_blank"
              className="mt-10 learnmore_btn"
            >
              Learn more
              <Img
                className="arrow"
                fluid={query.arrow.childImageSharp.fluid}
                alt="Restrict the behavior of containers at the system level"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
