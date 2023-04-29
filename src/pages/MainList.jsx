import { useParams } from "react-router-dom"
import { getCityInfo } from "../service/cityAPI";
import { useEffect, useState } from "react";
import { CityList } from "../components/ListOfCyty/CityList";
import { useNavigate } from "react-router-dom";

export const MainList = () => {
    const {cityName} = useParams();
    const [citys, setCitys] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        async function getData(){
            try{
                const data = await getCityInfo(cityName);
                if(data.data.length === 1){
                    navigate(`/weather?lat=12&long=43`)
                }
                setCitys(data.data)
            }
            catch(err){
                console.log(err);
            }
        }
        getData()
    }, [cityName])
    return <main>
        <CityList list={citys}/>
    </main>
}