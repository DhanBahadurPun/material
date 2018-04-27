import React, { Component } from "react";
import { MuiThemeProvider } from "material-ui/styles";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      apikey: ""
    };
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader title="Login Page" avatar={boy} />
          <TextField
            type="email"
            hintText="Enter email"
            value={this.state.email}
            onChange={e => this.onEmailChange(e)}
          />
          <br />
          <TextField
            type="password"
            hintText="Enter API Key"
            value={this.state.apikey}
            onChange={e => this.onApiKeyChange(e)}
          />
          <br />
          <CardActions>
            <RaisedButton label="Submit" onClick={() => this.onSubmit()} />
          </CardActions>
        </Card>
      </div>
    );
  }
  // 1a184d14d77f4be4a758aca8f5e72c3b
  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onApiKeyChange(e) {
    this.setState({ apikey: e.target.value });
  }
  onSubmit() {
    fetch("https://api.rebrandly.com/v1/account", {
      headers: {
        apikey: this.state.apikey
      }
    }).then(response => {
      if (response.ok) {
        // console.log(response);
        response.json().then(data => {
          if (data.email === this.state.email) {
            //console.log(data);
            console.log("Right User!");
            sessionStorage.getItem("apikey", this.state.apikey);
            return <Routes />;
          } else {
            console.log(data);
            console.log("Wrong User!");
          }
        });
      } else {
        alert(response.json());
      }
    });
    // .catch((error) => console.log(error));
    console.log({ email: this.state.email });
  }
}

export default Login;
