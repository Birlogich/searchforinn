import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/main/Main";
import { MainLayout } from "./layout/MainLayout";
import { Autorization } from "./components/autorization/Autorization";
import { Search } from "./components/search/Search";
import { NotFound } from "./components/notFound/notFound";
import { GetUserData } from "./store/login/loginSelector";
import "./App.css";

function App() {
  "https://codesandbox.io/s/react-redux-simpletodos-l1wyy?file=/src/store.js";

  const accessToken = localStorage.getItem("accessToken");
  const expire = localStorage.getItem("expire");
  const date = new Date(expire);

  console.log(GetUserData());

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Main />} />
            <Route path="autorization" element={<Autorization />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
