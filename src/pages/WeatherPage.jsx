import { useSearchParams } from "react-router-dom";
import { weatherAPI } from "../service/weatherAPI";
import { useEffect, useState } from "react";
export const WeatherPage = () => {
  const [params] = useSearchParams();
  const lat = params.get("lat");
  const long = params.get("long");
  const [weatherInfo, setWeatherInfo] = useState(undefined);

  useEffect(() => {
    async function getweather() {
      const { data } = await weatherAPI.getCurrentWeather(lat + "," + long);
      setWeatherInfo(data);
      console.log(data);
    }
    getweather();
  }, [lat, long]);

  return (
    <main>
      {weatherInfo && (
        <div>
          <h2>{weatherInfo.location.name}</h2>
          <img src={weatherInfo.current.condition.icon} alt="" />
        </div>
      )}
    </main>
  );
};
