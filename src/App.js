import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Contact from './Pages/Contact/Contact'
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home/Home";

import LogIn from "./Pages/LogIn/LogIn/LogIn";

import AuthProvider from "./Pages/Context/AuthProvider";
import PrivateRouter from "./Pages/LogIn/PrivateRouter/PrivateRouter";

import Detail from "./Pages/Detail/Detail";
import AddService from "./Pages/AddService/AddService";
import ManageOrder from "./Pages/ManageOrder/ManageOrder";
import MyOrder from "./Pages/MyOrder/MyOrder";
import Registration from "./Pages/Registration/Registration";








function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route path='/registration'>
              <Registration></Registration>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path='/services'>
              <Home></Home>
            </Route>

            <PrivateRouter path="/detail/:id">
              <Detail></Detail>
            </PrivateRouter>

            <PrivateRouter path="/manageorder">
              <ManageOrder></ManageOrder>
            </PrivateRouter>
            <PrivateRouter path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRouter>
            <Route path='/addservice'>
              <AddService></AddService>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>



          </Switch>


          <Footer></Footer>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
