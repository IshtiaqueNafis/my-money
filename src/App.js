import HomePage from "./pages/Home/HomePage";
import LogIn from "./pages/Login/Login";
import SignUp from "./pages/Signup/SignUp";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route path={'/'} exact><HomePage/></Route>
                    <Route path={'/login'}><LogIn/></Route>
                    <Route path={'/signup'}><SignUp/></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App
