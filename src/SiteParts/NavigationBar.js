import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import TransparentLogo from "./Logo2.PNG";
import * as routes from "../routes";
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class NavigationBar extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    return(
        <div style={{color:"#FFFFFF" }}>
        <AppBar title="Pet Adoption Site" position="static">
            <Toolbar style={{backgroundColor: "#05349A"}}>
                  <div style={{display: "flex", alignItems: "center"}}>
                    <Link to = {routes.HOME}><img src={TransparentLogo} alt="Adopet" width="100px"/></Link>
                    <Link to = {routes.PET_LIST}><Button variant="contained" color="primary">Pet List</Button></Link>
                    <Link to = {routes.PET_PROVIDERS_LIST}> <Button variant="contained" color="primary">Pet Providers </Button></Link>
                  </div>
                  <div style={{flex:1}}></div>
                  <div>
                      <Button
                        aria-owns={anchorEl ? 'simple-menu' : null}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                        style={{fontSize:"18px", color:"white"}}
                      >
                        <AccountCircle style={{ color: 'white', fontSize:"40px" }}/>
                      </Button>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                      >
                        <MenuItem onClick={this.handleClose}><Link to = {routes.LOGIN}> Visitor Login </Link></MenuItem>
                        <MenuItem onClick={this.handleClose}><Link to = {routes.ADMIN_LOGIN}> Admin Login </Link></MenuItem>
                      </Menu>
                  </div>
            </Toolbar>
        </AppBar>
        </div>
    )
  }
}
export default NavigationBar;
