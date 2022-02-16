import { Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import Profile from "./components/Profile";
import Anime from "./components/Anime";
import Auth from "./components/auth/Auth";
import { hasAuthenticated } from "./components/services/AuthApi";
import AuthenticatedRoute from "./components/auth/AuthenticatedRoute";
import Cart from "./components/Cart";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());

  return (
    <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <div className="App">
        <BrowserRouter>
          <Navbar />

          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={SignIn} />

          <Route path={"/movies"} component={Movies} />

          <Route path={"/tvshows"} component={TvShows} />
          <Route path={"/anime"} component={Anime} />
          <Route path={"/cart"} component={Cart} />

          <AuthenticatedRoute path="/profile" component={Profile} />
        </BrowserRouter>
      </div>
    </Auth.Provider>
  );
}

export default App;

// const [authState, setAuthState] = useState({
//   username: "",
//   role: "",
//   password: "",

//   status: false,
// });

// useEffect(() => {
//   const user = localStorage.getItem("user");
//   if (user) {
//     setAuthState({ ...authState, status: true });
//   }
// }, []);

/* <AuthenticatedRoute path="/account" component={Account} /> */
