import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      sidebarOpen: false
    }
  }
  toggleSidebar() {
    this.setState({sidebarOpen: !this.state.sidebarOpen})
  }
  
  render() {
    return (
      <div>
        <AppBar 
         title = "Title"
         onLeftIconButtonClick={ () => this.setState({ sidebarOpen: !this.state.sidebarOpen}) }
        />
        <Drawer open={this.state.sidebarOpen}
        docked={false}
         onRequestChange = {()=>{this.toggleSidebar()}}
        >
         <MenuItem>First</MenuItem>
         <MenuItem>Second</MenuItem>
        </Drawer>
      </div>
    );
  }
}
export default Header;