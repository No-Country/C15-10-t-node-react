import Home from "./layouts/Home/Home";

function App() {
<<<<<<< Updated upstream
  return <Home />;
=======
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
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
      </Routes>
      <Footer></Footer>
    </>
  );
>>>>>>> Stashed changes
}

export default App;
