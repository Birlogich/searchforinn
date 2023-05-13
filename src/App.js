import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Main } from "./components/main/Main";
import { Autorization } from "./components/autorization/Autorization";
import { Search } from "./components/search/Search";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Header />} />
          <Route path="/" element={<Main />} />
          <Route path="/autorization" element={<Autorization />} />
          <Route path="search" element={<Search />} />
          <Route element={<Footer />} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
