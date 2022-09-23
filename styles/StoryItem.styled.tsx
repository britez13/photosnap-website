import styled from "styled-components";

const StoryItemStyle: any = styled.div`
  background-image: ${(props) => `url(${props.images.mobile})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 37.5rem;
  display: flex;
  /* flex-direction: column;
  justify-content: flex-end; */
  position: relative;

  & > div {
    inset: 0 0 0 0;
    background-image: linear-gradient(#ffffff2b, #000000cc);
    position: absolute;
  }

  .info-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 4rem 5rem;
    gap: 1rem;

    h3 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.3rem;
    }

    
    &> span {
      margin-top: .5rem;
      width: 100%;
      height: 1px;
      background-color: #fff;
      opacity: 0.25;
    }

    
    div {
      margin-top: 1rem;

    }  

    
    .link-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span { 
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
      }
    }


  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 50rem;
    background-size: fill;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    background-image: ${(props) => `url(${props.images.desktop})`};
  }
`;

export default StoryItemStyle;
