import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import AddPet from '../Admin/AddPet'
import PetList from '../Visitor/PetList'
import LoginForm from '../Visitor/LoginForm'
import Home from '../Visitor/Home'
import Logo from './Logo.JPG'
import TransparentLogo from "./Logo.PNG"

//import Donate from '../Visitor/Donate'


const NavigationBar = () => {
    return(
        <div>
        <AppBar title="Pet Adoption Site" position="static">
            <Toolbar style={{backgroundColor: "#E04950"}}>
                <Typography variant="title" >
                <Link to ='/Home'><img src={TransparentLogo} alt="Adopet" width="4%"/></Link>
                ADOPET
                <Link to ='/addPet'> AddPet Link </Link>
                <Link to ='/pets'> Pet List </Link>
                <Link to ='/PetProviderList'> Pet Providers </Link>
                <Link to ='/LoginForm'> VisitorLogin Link </Link>
                <Link to ='/TestRouter'> Test Link </Link>
                <Link to = '/PayPalRender' > Paypal </Link>
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavigationBar;
