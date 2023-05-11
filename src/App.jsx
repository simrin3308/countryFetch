import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import CountryDetail from "./pages/country-detail/CountryDetail";

const App = () => {
  return (
    <main className="main-container">
      <Routes>
        <Route exact path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/:code" element={<CountryDetail />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
