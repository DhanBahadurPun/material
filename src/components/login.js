import React, { Component } from "react";
import { MuiThemeProvider } from "material-ui/styles";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      apikey: ""
    };
  }
  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  onApiKeyChange(e) {
    this.setState({ apikey: e.target.value });
  }
  onSubmit() {
    fetch("https://api.rebandly.com/vl/account", {
      headers: {
        apikey: this.state.apikey
      }
    })
    .then(response=>{
      if(response.ok){
        console.log(response);
      }else{
        alert(response.statusText);
      }
    })

    console.log(this.state);
  }
  render() {
    return (
      <div>
        <input
          type="txt"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.onEmailChange(e)}
        />
        <br />
        <input
          type="password"
          placeholder="api key"
          value={this.state.apikey}
          onChange={e => this.onApiKeyChange(e)}
        />
        <br />
        <button onClick={() => this.onSubmit()}>Submit</button>
      </div>
    );
  }
}

export default Login;
