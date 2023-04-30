import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Products from "./pages/Products";
import ProductsDetail from "./pages/ProductsDetail";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";
import Basket from "./pages/Basket";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <div className="content">
            <Switch>
              <Route path="/" exact component={Products} />
              <Route path="/product/:product_id" component={ProductsDetail} />
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Route path="/basket" component={Basket} />
              <ProtectedRoute path="/profile" component={Profile} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}


export default App;
