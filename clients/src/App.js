import "./App.css";
import Topbar from "./component/Topbar";
import Navbar from "./component/Navbar";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import About from "./component/About";
import Contact from "./component/Contact";
import Policy from "./component/Policy";
import Cartscreen from "./screens/Cartscreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Orderscreen from "./screens/Orderscreen";
import Adminscreen from "./screens/Adminscreen";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Navbar/>
      <Switch>
        <Route path="/" exact component={HomeScreen}/>
        <Route path="/admin"  component={Adminscreen}/>
        <Route path="/order" exact component={Orderscreen}/>
        <Route path="/signin" exact component={Login}/>
        <Route path="/signup" exact component={Register}/>
        <Route path="/cart" exact component={Cartscreen}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/terms&policy" exact component={Policy}/>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
