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
import * as constants from '../constants'
import * as routes from "../routes";

const NavigationBar = () => {
    return(
        <div>
        <AppBar title="Pet Adoption Site" position="static">
            <Toolbar style={{backgroundColor: "#00000A"}}>
                <Typography variant="title">
                <Link to = {routes.ADD_PET}> AddPet Link </Link>
                <Link to = {routes.ADD_PET_PROVIDER}> AddPetProvider Link </Link>
                <Link to = {routes.PET_LIST}> Pet List </Link>
                <Link to = {routes.PET_PROVIDERS_LIST}> Pet Providers </Link>
                <Link to = {routes.LOGIN}> Visitor Login </Link>
                <Link to = {routes.ADMIN_LOGIN}> Admin Login </Link>
                <Link to = {routes.TEST}> Test Link </Link>
                <Link to = {routes.DONUT}> Donate </Link>
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavigationBar;
