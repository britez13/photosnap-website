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


const ButtonWhite = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
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

const TitleBlack = styled.h2`
  font-size: 3.2rem;
  color: ${({ theme }) => theme.colors.black};
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

const DescriptionBlack = styled.p`
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.colors.black};
  mix-blend-mode: normal;
  opacity: 0.6;
`;

const SharedHeroStyle = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  .hero {
    background-image: ${(props) => `url(${props.images.mobile})`};
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 29.4rem;
  }

  .info {
    background-color: ${({ theme }) => theme.colors.black};
    min-height: 30rem;
  }

  .wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }


  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 49rem;

    .hero {
      background-image: ${(props) => `url(${props.images.tablet})`};
      grid-column: 3/4;
    }

    .info {
      grid-column: 1/3;
      grid-row: 1/2;
    }

    
    .wrapper {
      max-width: 38.7rem;
    }


  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(7, 1fr);

    .hero {
      background-image: ${(props) => `url(${props.images.desktop})`};
      grid-column: 4/8;
    }

    .info {
      grid-column: 1/4;
      padding-left: 9rem;
    }
  }
`; 

const BetaSectionStyle = styled.section`
  height: 28.8rem;
  background-image: ${(props) => `url(${props.images.mobile})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding-inline: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 28rem;
    background-image: ${(props) => `url(${props.images.tablet})`};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-inline: 2.5rem;

    .wrapper {
      max-width: 40rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    background-image: ${(props) => `url(${props.images.desktop})`};
    padding-inline: 10rem;
  }
`;


export { Container, Main, Title, TitleBlack, Description, DescriptionBlack, Button, ButtonWhite, SharedHeroStyle, BetaSectionStyle}
