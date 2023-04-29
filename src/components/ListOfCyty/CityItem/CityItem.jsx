import { CityItemListItem } from "./CityItemStyled"
import { getFlagUrl } from "../../../service/flagApi"
import { useState } from "react"

export const CityItem = ({data}) => {
    // console.log(document.images);
    const [imgLoaded, setImageLoaded] = useState(false);
    const img = new Image();
    // console.log(data);
    img.onload = () => {
        setImageLoaded(true);
    }
    
    img.src = getFlagUrl(data.countryCode);

    return <CityItemListItem flagUrl={imgLoaded && getFlagUrl(data.countryCode)}>
        <h2>{data.name}</h2>
        <p>{data.country}</p>
        <p>{data.region}</p>
        {/* <img src={getFlagUrl(data.countryCode)} alt="flag" /> */}
    </CityItemListItem>
}