import { useContext } from "react";
import { DataContext } from "../pages/_app";
import FeaturesListStyle from "../styles/FeaturesList.styled"

const FeaturesList = () => {

    const value = useContext(DataContext);

  return (
  <FeaturesListStyle>
    {}
  </FeaturesListStyle>);
}

export default FeaturesList