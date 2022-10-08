import styled from "styled-components";

const PlanStyle: any = styled.section`
  max-width: min(90%, 110rem);
  margin-inline: auto;
  margin-block: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  color: black;

  .first-wrapper {
    color: ${({ theme }) => theme.colors.black};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    .monthly {
      color: ${(props) => (props.isYearly ? "gray" : "black")};
    }

    .yearly {
      color: ${(props) => (props.isYearly ? "black" : " gray")};
    }
  }

  .toggle {
    cursor: pointer;
    input {
      display: none;
    }

    div {
      position: relative;
      background-color: ${({ theme }) => theme.colors.grey};
      width: 6.4rem;
      height: 3.2rem;
      border-radius: 3.2rem;
      transition: background-color 0.3s;

      &::after {
        content: "";
        position: absolute;
        display: block;
        top: 0.127rem;
        bottom: 0.127rem;
        left: 0.127rem;
        width: 3rem;
        height: 3rem;
        border-radius: 2.27rem;
        background-color: black;
        transition: all 0.3s;
      }
    }

    input:checked ~ div {
      background-color: black;

      &::after {
        background-color: white;
        transform: translateX(-100%);
        left: calc(100% - 1.9px);
      }
    }
  }

  .second-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      flex-direction: row;
    }
  }

  .item {
    background-color: #f5f5f5;
    min-height: 40.7rem;
    display: grid;
    align-content: center;
    justify-items: center;
    gap: 3rem;
    padding-inline: 2rem;

    h2,
    p {
      text-align: center;
    }

    h2 {
      font-size: 2.4rem;
    }

    p {
      margin-top: 2rem;
      font-size: 1.5rem;
      line-height: 2.5rem;
      mix-blend-mode: normal;
      opacity: 0.6;
    }

    .price {
      h2 {
        font-size: 4rem;
        letter-spacing: 0.41rem;
        text-transform: uppercase;
      }

      p {
        margin-top: 0rem;
      }
    }

    a {
      padding: 1.5rem;
      background-color: black;
      color: white;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      width: 100%;
      transition: background-color 0.3s ease-in, color 0.3s ease-in;
      cursor: pointer;

      &:hover {
        background-color: #dfdfdf;
        color: black;
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      gap-row: 1rem;
      min-height: 27rem;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      align-self: center;
      padding-inline: 5rem;
      justify-items: end;

      h2,
      p {
        text-align: start;
      }

      .price {
        p {
          text-align: end;
          padding-right: 0.5rem;
        }
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      gap-row: 1rem;
      min-height: 40.7rem;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      align-self: center;
      padding-inline: 5rem;
      justify-items: center;

      h2,
      p {
        text-align: center;
      }

      .price {
        p {
          text-align: center;
          padding-right: 0;
        }
      }
    }
  }

  .pro {
    background-color: ${({ theme }) => theme.colors.black};
    min-height: 40.7rem;
    display: grid;
    align-content: center;
    justify-items: center;
    gap: 3rem;
    padding-inline: 2rem;
    color: white;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      display: block;
      height: 0.6rem;
      background-image: linear-gradient(
        26.57deg,
        #ffc593 0%,
        #bc7198 43.29%,
        #5a77ff 83.33%
      );
    }

    h2,
    p {
      text-align: center;
    }

    h2 {
      font-size: 2.4rem;
    }

    p {
      margin-top: 2rem;
      font-size: 1.5rem;
      line-height: 2.5rem;
      mix-blend-mode: normal;
      opacity: 0.6;
    }

    .price {
      h2 {
        font-size: 4rem;
        letter-spacing: 0.41rem;
        text-transform: uppercase;
      }

      p {
        margin-top: 0rem;
      }
    }

    a {
      padding: 1.5rem;
      background-color: white;
      color: black;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      width: 100%;
      transition: background-color 0.3s ease-in;
      cursor: pointer;

      &:hover {
        background-color: #dfdfdf;
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      gap-row: 1rem;
      min-height: 27rem;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      align-self: center;
      padding-inline: 5rem;
      justify-items: end;

      h2,
      p {
        text-align: start;
      }

      .price {
        p {
          text-align: end;
          padding-right: 0.5rem;
        }
      }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      gap-row: 1rem;
      min-height: 47rem;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      align-self: center;
      padding-inline: 5rem;
      justify-items: center;

      h2,
      p {
        text-align: center;
      }

      .price {
        p {
          text-align: center;
          padding-right: 0;
        }
      }
    }
  }
`;

export default PlanStyle;
