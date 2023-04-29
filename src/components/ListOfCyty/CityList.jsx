import { CityItem } from "./CityItem/CityItem"
import { CityListList } from "./CityListStyled"



export const CityList = ({list = []}) => {
    return <CityListList>
        {list.map(item => <CityItem key={item.id} data={item}/>)}
    </CityListList>
}