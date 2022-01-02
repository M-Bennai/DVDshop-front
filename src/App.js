import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={SignIn} />
      </BrowserRouter>
    </div>
  );
}

export default App;
