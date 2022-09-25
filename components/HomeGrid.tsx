import { useContext } from "react";
import { DataContext } from "../pages/_app";
import HomeGridStyle from "../styles/HomeGrid.styled";
import HomeGridItem from "./HomeGridItem";
import { Description } from "./sharedstyles";

const HomeGrid = () => {
  const value = useContext(DataContext);
  const homeGrid = value.homeGrid;

  return (
    <HomeGridStyle>
      {homeGrid.map((item) => {
        return <HomeGridItem key={item.title} item={item} />;
      })}
    </HomeGridStyle>
  );
};

export default HomeGrid;
