import styled from "styled-components";

const FeatureItemStyle = styled.div`
  width: min(80%, 35rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: flex-start;
  }

  img {
    width: 7rem;
    height: 7rem;
    object-fit: contain;
  }

  h3 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.black};
    margin-top: 3rem;
  }

  p {
    text-align: center;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.black};
    mix-blend-mode: normal;
    opacity: 0.6;
    line-height: 25px;
  }
`;

export default FeatureItemStyle;

