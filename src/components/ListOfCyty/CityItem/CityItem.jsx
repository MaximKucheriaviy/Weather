import { CityItemListItem } from "./CityItemStyled";
import { getFlagUrl } from "../../../service/flagApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CityItem = ({ data }) => {
  const [imgLoaded, setImageLoaded] = useState(false);
  const img = new Image();
  const navigate = useNavigate();

  img.onload = () => {
    setImageLoaded(true);
  };

  img.src = getFlagUrl(data.countryCode);

  const redirectToWeather = () => {
    navigate(`/weather?lat=${data.latitude}&long=${data.longitude}`);
  };

  return (
    <CityItemListItem
      onClick={redirectToWeather}
      flagUrl={imgLoaded && getFlagUrl(data.countryCode)}
    >
      <h2>{data.name}</h2>
      <p>{data.country}</p>
      <p>{data.region}</p>
      {/* <img src={getFlagUrl(data.countryCode)} alt="flag" /> */}
    </CityItemListItem>
  );
};
