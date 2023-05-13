import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Main } from "./components/main/Main";
import { Autorization } from "./components/autorization/Autorization";
import { Search } from "./components/search/Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        {/*  <Main /> */}
        {/*  <Autorization /> */}
        <Search />
      </div>
      <Footer />
    </div>
  );
}

export default App;
