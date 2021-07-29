import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from './front/home';
import { Navbar } from './components/nav';
import injectContext from "./front/appContext";
import {Services} from "../src/front/services"
import {About} from "../src/front/about";

function App() {
  return (
    <div className="d-flex flex-column h-100">
    <BrowserRouter>
    
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        
        </Switch>
      
    </BrowserRouter>
  </div>
  );
}

export default injectContext(App);
