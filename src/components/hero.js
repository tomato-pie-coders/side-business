import React from "react";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import { graphql } from "gatsby";

const Hero = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;
`;

const HeroImage = styled(Img)`
  height: 61.8vh;
  max-height: 400px;
`;

const Details = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  font-size: 14px;
  padding: 0 0.5em;
  @media (min-width: 600px) {
    font-size: 16px;
  }

  @media (min-width: 1000px) {
    font-size: 20px;
  }
`;

const Bio = styled.p`
  color: yellow;
`;

const Headline = styled.h2`
  margin: 0;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.125em;
  font-weight: bold;
`;

export default props => {
  const data = props.data.contentfulPerson;

  return (
    <Hero>
      <HeroImage alt={data.name} fluid={data.heroImage.fluid} />
      <Details>
        <Headline>{data.name}</Headline>
        <Title>{data.title}</Title>
        <Bio>{data.shortBio.shortBio}</Bio>
      </Details>
    </Hero>
  );
};
