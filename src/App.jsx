import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Header from "./components/header";
import Home, { loader as homeLoader } from "./components/home";
import Detail from "./components/cityWeatherDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/:city" element={<Detail />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
