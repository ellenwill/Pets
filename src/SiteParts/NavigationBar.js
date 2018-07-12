import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import AddPet from '../Admin/AddPet'
import PetList from '../Visitor/PetList'
import PetProviderList from '../Visitor/PetProviderList'
import LoginForm from '../Visitor/LoginForm'
import ALoginForm from '../Admin/ALoginForm'
import Home from '../Visitor/Home'
import Logo from './Logo.JPG'
import TransparentLogo from "./Logo2.PNG";
import * as routes from "../routes";
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';


//import Donate from '../Visitor/Donate'


const NavigationBar = () => {
    return(
        <div style={{color:"#FFFFFF"}}>
        <AppBar title="Pet Adoption Site" position="static">
            <Toolbar style={{backgroundColor: "#05349A"}}>
                <Typography variant="title">
                <Link to = {routes.HOME}><img src={TransparentLogo} alt="Adopet" width="8%"/></Link>
                <Link to = {routes.PET_LIST}><Button variant="contained" color="primary">Pet List</Button></Link>
                <Link to = {routes.PET_PROVIDERS_LIST}> <Button variant="contained" color="primary">Pet Providers </Button></Link>
                  <div class = "shiftLoginRight">
                    <AccountCircle style={{ color: 'white' }}/>
                    <Link to = {routes.LOGIN}> Visitor Login </Link>
                    <Link to = {routes.ADMIN_LOGIN}> Admin Login </Link>
                  </div>
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavigationBar;
