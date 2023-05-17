import { useSelector } from "react-redux";
import { userData } from "./store/login/loginSelector";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/main/Main";
import { loadState } from "./store/local-storage";
import { MainLayout } from "./layout/MainLayout";
import { Autorization } from "./components/autorization/Autorization";
import { Search } from "./components/search/Search";
import { NotFound } from "./components/notFound/notFound";
import "./App.css";

function App() {
  const getUserData = useSelector(userData);

  loadState();

  const requestLoginUser = () => {
    fetch("https://gateway.scan-interfax.ru/api/v1/account/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(getUserData),
    })
      .then((res) => res.json())
      .then((json) => {
        const { accessToken, expire } = json;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("expire", expire);
      });
  };

  requestLoginUser();

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
