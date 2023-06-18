import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/main/Main";
import { MainLayout } from "./layout/MainLayout";
import { getUserBalance, getUserInfo } from "./api/client";
import { Autorization } from "./components/autorization/Autorization";
import { Search } from "./components/search/Search";
import { NotFound } from "./components/notFound/notFound";
import "./App.css";
import { accessToken, expireDate } from "./utils";

function App() {
  const dispatch = useDispatch();

  const expireDateToDate = new Date(expireDate);
  let today = new Date();

  if (today > expireDateToDate && expireDateToDate) {
    alert("Ваш accessToken устарел, залогиньтесь заново");
    localStorage.removeItem("accessToken");
  }

  //Не получилось через useState или еще как-то обновлять компонент, где "использовано компаний" и "лимит по компаниям"

  useEffect(() => {
    if (accessToken) {
      dispatch(getUserInfo(accessToken));
      dispatch(getUserBalance(accessToken));
    }
  }, [dispatch]);

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
