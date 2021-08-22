import "./App.css";
import Sidebar from "./sidebar";
import TopHeader from "./topheader";
import Dashboard from "./dashboard";
import Users from "./users";
import CreateUser from "./createuser";
import EditUser from "./edituser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserProvider } from "./userContext";
import { ProdProvider } from "./productContext";
import EditProd from "./editProd";
import CreateProd from "./createProd";
import Products from "./product";

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <TopHeader></TopHeader>
            <div class="container-fluid">
              <Switch>
                <Route path="/" component={Dashboard} exact={true} />

                <UserProvider>
                  <Route path="/user" component={Users} exact={true} />
                  <Route
                    path="/create-user"
                    component={CreateUser}
                    exact={true}
                  />
                  <Route
                    path="/user/edit/:id"
                    component={EditUser}
                    exact={true}
                  />
                  <ProdProvider>
                  <Route path="/prod" component={Products} exact={true} />
                  <Route
                    path="/create-prod"
                    component={CreateProd}
                    exact={true}
                  />
                  <Route
                    path="/prod/edit/:id"
                    component={EditProd}
                    exact={true}
                  />
                </ProdProvider>
                </UserProvider>
                
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
