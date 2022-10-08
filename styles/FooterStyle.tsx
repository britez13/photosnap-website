import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: black;
  height: 53.9rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    width: min(90%, 31rem);
    height: 42.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 5rem;

    .second-wrapper {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .social-media {
        display: flex;
        justify-content: center;
        flex-direction: row;
        gap: 1.2rem;
        align-items: flex-end;
      }
    }

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 3rem;
      align-items: center;

      a {
        font-size: 1.2rem;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
      }
    }
  }

  .copyright {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      gap: 2rem;

      span {
        font-size: 1.2rem;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 25rem;

    .wrapper {
      width: min(90%, 110.4rem);
      height: 12.2rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .links {
      height: 100%;
      display: flex;
      flex-direction: row;
      gap: 7rem;

      .second-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .social-media {
          display: flex;
          justify-content: center;
          flex-direction: row;
          gap: 1.2rem;
          align-items: flex-end;
        }
      }

      ul {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: 0;

        a {
          font-size: 1.2rem;
          letter-spacing: 0.2rem;
          text-transform: uppercase;
          transition: opacity 0.3s ease;

          &:hover {
            mix-blend-mode: normal;
            opacity: 0.3;
          }
        }
      }
    }

    .copyright {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      gap: 0;
      height: 100%;

      a {
        display: flex;
        align-items: center;
        gap: 2rem;

        span {
          font-size: 1.2rem;
          letter-spacing: 0.2rem;
          text-transform: uppercase;
          transition: text-decoration 1s ease-in;
          transition-delay: 0.3s;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    .links {
      gap: 10rem;
    }
  }
`;

export default FooterStyle;
