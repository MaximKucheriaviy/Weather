import styled from "styled-components";
import placeholder from "../../../images/placeHolder.png"

const gradVal = "#9b9b9b99"
export const CityItemListItem = styled.li`
    display: inline-block;
    width: 200px;
    min-height: 200px;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 2px 2px 1px black;
    background-image: linear-gradient(to right, ${gradVal}, ${gradVal}), url(${props => props.flagUrl ? props.flagUrl : placeholder});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 160% 160%;
`