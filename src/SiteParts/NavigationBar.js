import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import AddPet from '../Admin/AddPet'
import PetList from '../Visitor/PetList'
import AdminLogin from '../Admin/Login'
import VisitorLogin from '../Visitor/Login'

const NavigationBar = () => {
    return(
        <div>
        <AppBar title="Pet Adoption Site" position="static">
            <Toolbar style={{backgroundColor: "#E04950"}}>
                <Typography variant="title" >
                ADOPET
                <Link to ='/addPet'> AddPet Link </Link>
                <Link to ='/pets'> Pet Link </Link>
                <Link to ='/adminLogin'> AdminLogin Link </Link>
                <Link to ='/visitorLogin'> VisitorLogin Link </Link>
                <Link to ='/TestRouter'> Test Link </Link>
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavigationBar;
