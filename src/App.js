import { SearchForm } from "./components/FindForm/FindForm";
import { AppStyled } from "./AppStyled";
import { useState } from "react";

function App() {
  const [citys, setCitys] = useState([]);
  const [currentCity, setCurrentCity] = useState(undefined);
  const modSetCurrentCity = (city) => {
    setCitys([]);
    setCurrentCity(city);
  };

  const modSetCity = (citys) => {
    setCurrentCity(undefined);
    setCitys(citys);
  };

  return (
    <AppStyled className="App">
      <header>
        <h1>Weatherick</h1>
        <SearchForm setCitys={modSetCity} setCurrentCity={modSetCurrentCity} />
      </header>
    </AppStyled>
  );
}

export default App;
