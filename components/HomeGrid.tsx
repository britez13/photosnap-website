import { useContext } from "react";
import { DataContext } from "../pages/_app";
import HomeGridStyle from "../styles/HomeGrid.styled";
import Grid1 from "./Grid1";
import Grid2 from "./Grid2";

const HomeGrid = ({homeGrid}) => {
  // console.log(homeGrid);
  
  return (
    <HomeGridStyle>
      <Grid1 gridInfo={homeGrid[0]} />
      <Grid2 gridInfo={homeGrid[1]} />
    </HomeGridStyle>
  );
  };

export default HomeGrid;


