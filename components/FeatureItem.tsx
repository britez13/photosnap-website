import Image from "next/image";
import FeatureItemStyle from "../styles/FeatureItem.styled";

const FeatureItem = ({ feature }) => {
  return (
    <FeatureItemStyle image={feature.image}>
      <img src={feature.image} />
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </FeatureItemStyle>
  );
};

export default FeatureItem;
