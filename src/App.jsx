import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home, { Loader as homeLoader } from "./components/home";
import HomeMap from "./components/home-map";
import Detail from "./components/cityWeatherDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/map"
          element={
            <>
              <Header />
              <HomeMap />
            </>
          }
        />
        <Route path=":city" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
