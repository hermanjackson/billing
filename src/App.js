import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from './front/home';
import { Navbar } from './components/nav';
import injectContext from "./front/appContext";
import {Services} from "../src/front/services"
import SMSForm from "./front/smsform";
import { Breadcrumb } from "./components/breadcrumb";

function App() {
  return (
    <div className="d-flex flex-column h-100">
    <BrowserRouter>
      <Breadcrumb/>   
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/smsform">
            < SMSForm />
          </Route>
        
        </Switch>
      
    </BrowserRouter>
  </div>
  );
}

export default injectContext(App);
