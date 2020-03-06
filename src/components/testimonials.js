import React from "react";
import styled from "@emotion/styled";
import Testimonial from "./testimonial";

const Title = styled.h2`
  font-size: 1.2rem;
`;

const Grid = styled.div`
  display: grid;
  @media (min-width: 760px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px 20px;
  }
`;

const t = [
  { title: "Joe", description: "great work bro" },
  { title: "Sara", description: "great work bro" },
  { title: "Sal", description: "great work bro" }
];

const Testimonials = () => {
  return (
    <section>
      <Title>Testimonials</Title>
      <Grid>
        {t.map(({ title, description }, i) => (
          <Testimonial key={i} title={title} description={description} />
        ))}
      </Grid>
    </section>
  );
};

export default Testimonials;
