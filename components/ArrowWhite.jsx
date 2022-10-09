import styled from "styled-components";

const Arrow = styled.div`
  width: 4.2rem;
  height: 0.1rem;
  background-color: white;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    right: -0.2rem;
    top: -0.35rem;
    width: 1rem;
    height: 0.1rem;
    transform: rotate(47deg);
    background-color: white;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    right: -0.2rem;
    bottom: -0.4rem;
    width: 1rem;
    height: 0.1rem;
    transform: rotate(-47deg);
    background-color: white;
  }
`;

const ArrowWhite = () => {
  return <Arrow></Arrow>;
};

export default ArrowWhite;
