import { SearchForm } from "./components/FindForm/FindForm";
import { AppStyled } from "./AppStyled";

function App() {
  return (
    <AppStyled className="App">
      <header>
        <h1>Weatherick</h1>
        <SearchForm />
      </header>
    </AppStyled>
  );
}

export default App;
