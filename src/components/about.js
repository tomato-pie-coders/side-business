import React from "react";
import Img from "gatsby-image";
import styled from "@emotion/styled";

const Grid = styled.div`
  display: grid;
  padding: 0 1em;
  @media (min-width: 700px) {
    grid-template-columns: 2fr 1fr;
  }
`;
export default ({ data }) => {
  const { title, description } = data;
  return (
    <Grid>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <p>Image here</p>
      </div>
    </Grid>
  );
};
