import styled from "styled-components";

const PlanStyle = styled.section`
  margin-block: 5rem;
  display: flex;
  justify-content: center;

  .first-wrapper {
    color: ${({ theme }) => theme.colors.black};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
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
`;

export default PlanStyle;
