import React from "react";
import Home from "../screens/home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Controller = () => {
  const baseUrl = "/api/v1/";
  return (
    <React.Fragment>
                <LoadingIndicatorComponent></LoadingIndicatorComponent>
                <Header/>
                <Switch>


                    <Route
                        exact
                        path="/"
                        render={(props) => <Home {...props} baseUrl={baseUrl}/>}
                    />

                    <Route path="/authentication">
                        <AuthenticationDialog/>
                    </Route>


                </Switch>

                <AppNotificationComponent/>
            </React.Fragment>
  );
};

export default Controller;
