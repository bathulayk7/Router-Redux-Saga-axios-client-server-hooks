import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";

const UserRoute = (props) => {
  if (props.user) {
    return <Route {...props}/>;
  }else{
      return <Redirect to="/"/>
  }
};
export default connect(({ user }) => ({ user }))(UserRoute);
