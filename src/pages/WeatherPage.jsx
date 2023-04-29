import { useSearchParams } from "react-router-dom"
import { useParams } from "react-router-dom";
export const WeatherPage = () => {
    const [params] = useSearchParams();
    const p = params.get("lat")

    console.log(p);
    return <main>
        <h2>weather</h2>
    </main>
}