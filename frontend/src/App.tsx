import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import Navbar from "./components/Navbar/Navbar";
import Login from "./layouts/auth/login/Login";
import Register from "./layouts/auth/register/Register";
import Profile from "./layouts/profile/Profile";
import Search from "./layouts/search/SearchPage";
import Place from "./layouts/place/Place";
import Footer from "./components/Footer/Footer";
import Home from "./layouts/home/Home";
import NotFound from "./layouts/notFound/404";

function App() {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={
            !user ? (
              <Login />
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        ></Route>
        <Route
          path="/register"
          element={
            !user ? (
              <Register />
            ) : (
              <Navigate to="/" replace={true} />
            )
          }
        ></Route>
        <Route path="/search" element={<Search></Search>}></Route>
        <Route path="/place/:id" element={<Place></Place>}></Route>
        <Route
          path="/user/:id"
          element={
            user && user.token ? (
              <Profile></Profile>
            ) : (
              <Navigate to="/login" replace={true} />
            )
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
