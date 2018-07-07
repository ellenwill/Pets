import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import AddPet from '../Admin/AddPet'
import PetList from '../Visitor/PetList'
import AdminLogin from '../Admin/Login'
import VisitorLogin from '../Visitor/Login'
//import Donate from '../Visitor/Donate'

const NavigationBar = () => {
    return(
        <div>
        <AppBar title="Pet Adoption Site" position="static">
            <Toolbar style={{backgroundColor: "#E04950"}}>
                <Typography variant="title" >
                ADOPET
                <Link to ='/addPet'> AddPet Link </Link>
                <Link to ='/pets'> Pet List </Link>
                <Link to ='/petProviders'> Pet Providers </Link>
                <Link to ='/adminLogin'> AdminLogin Link </Link>
                <Link to ='/visitorLogin'> VisitorLogin Link </Link>
                <Link to ='/TestRouter'> Test Link </Link>
                <Link to = '/PayPalButton' > PaypalButton </Link>
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavigationBar;
