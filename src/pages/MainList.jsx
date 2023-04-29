import { useParams } from "react-router-dom";
import { getCityInfo } from "../service/cityAPI";
import { useEffect, useState } from "react";
import { CityList } from "../components/ListOfCyty/CityList";
import { useNavigate } from "react-router-dom";

export const MainList = () => {
  const { cityName } = useParams();
  const [citys, setCitys] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      try {
        const data = await getCityInfo(cityName);
        console.log(data);
        if (data.data.length === 1) {
          navigate(
            `/weather?lat=${data.data[0].latitude}&long=${data.data[0].longitude}`
          );
        }
        setCitys(data.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [cityName, navigate]);
  return (
    <main>
      <CityList list={citys} />
    </main>
  );
};
