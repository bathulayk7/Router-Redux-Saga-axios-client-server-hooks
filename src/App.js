import React from "react";
import Header from "./components/shared/Header/Header";
import TaskManager from "./components/TaskManager/TaskManager";
import Footer from "./components/shared/Footer/Footer";
import Login from "./components/Login/Login";
import { Route, Switch, Redirect } from "react-router";
import Register from "./components/Register/Register";
import PageNotFound from "./components/shared/PageNotFound/PageNotFound";
import TaskDetail from "./components/TaskManager/TaskDetail/TaskDetail";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Switch>
            <Route path="/" exact render={()=><Redirect to="/login"/>} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/tasks" exact component={TaskManager} />
            <Route path="/tasks/:id" component={TaskDetail} />
            <Route path="/**" component={PageNotFound} />
          </Switch>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
