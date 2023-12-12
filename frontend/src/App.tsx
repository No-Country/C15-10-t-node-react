import { Route, Routes } from "react-router-dom";
import Home from "./layouts/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./layouts/auth/login/Login";
import Register from "./layouts/auth/register/Register";
import Profile from "./layouts/profile/Profile";
import Search from "./layouts/search/Search";
import Place from "./layouts/place/Place";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
        <Route path="/place/:id" element={<Place></Place>}></Route>
        <Route path="/user/:id" element={<Profile></Profile>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
