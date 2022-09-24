import styled from 'styled-components'

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// const Title = styled.h1`
//   margin: 0;
//   line-height: 1.15;
//   font-size: 4rem;
//   text-align: center;
//   text-decoration: none;

//   a {
//     color: ${({ theme }) => theme.colors.grey};
//     text-decoration: none;
//     &:hover,
//     :focus,
//     :active {
//       text-decoration: underline;
//     }
//   }
// `

// const Description = styled.p`
//   text-align: center;
//   line-height: 1.5;
//   font-size: 1.5rem;
// `

const Wrapper = styled.div`
  
`



const Button = styled.a`
  font-size: 1.2rem;
  font-size: 700;
  text-transform: uppercase;
  background-color: black;
  color: white;
  padding-block: 1rem;
  padding-inline: 2rem;
  letter-spacing: 0.2rem;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.33rem;
  line-height: 4rem;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 4rem;
    letter-spacing: 0.417rem;
    line-height: 4.8rem;
  }

`;

const Description = styled.p`
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  mix-blend-mode: normal;
  opacity: 0.6;

`;


export { Container, Main, Title, Description, Button }
