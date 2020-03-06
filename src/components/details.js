import React from "react";
import styled from "@emotion/styled";
// import Img from "gatsby-image";

export default ({ data }) => {
  const { title, description } = data;
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};
