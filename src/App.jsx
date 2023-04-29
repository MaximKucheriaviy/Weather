import { SearchForm } from "./components/FindForm/FindForm";
import { AppStyled } from "./AppStyled";
import { MainList } from "./pages/MainList";
import { WeatherPage } from "./pages/WeatherPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <AppStyled className="App">
      <header>
        <h1>Weatherick</h1>
        <SearchForm/>
      </header>
      <Routes>
        <Route path="/" element={<h1>MainPage</h1>}/>
        <Route path="/list/:cityName" element={<MainList/>}/>
        <Route path="/weather" element={<WeatherPage/>}/>
      </Routes>
    </AppStyled>
  );
}

export default App;
