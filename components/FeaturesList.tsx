import { useContext } from "react";
import { DataContext } from "../pages/_app";
import FeaturesListStyle from "../styles/FeaturesList.styled"
import FeatureItem from "./FeatureItem";

const FeaturesList = ({features}) => {
  
  return (
    <FeaturesListStyle>
      {features.map((feature) => {
        return <FeatureItem key={feature.title} feature={feature} />;
      })}
    </FeaturesListStyle>
  );
};

export default FeaturesList



