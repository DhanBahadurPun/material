import React, { Component } from "react";
//material -ui
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Card, CardText } from "material-ui/Card";
//component
import Header from "./components/Header";
import Login from "./components/login";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Login />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
