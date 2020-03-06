import React from "react";
import styled from "@emotion/styled";

const Card = styled.article`
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 2rem;
`;

const Description = styled.p`
  font-style: italic;
`;

const Testimonial = ({ title, description }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>"{description}"</Description>
    </Card>
  );
};

export default Testimonial;
