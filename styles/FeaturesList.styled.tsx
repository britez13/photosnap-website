import styled from "styled-components";

const FeaturesListStyle = styled.section`
  width: min(90%, 110rem);
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin-inline: auto;
  margin-top: 8rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 7rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 7rem;
  }
`;

export default FeaturesListStyle;
