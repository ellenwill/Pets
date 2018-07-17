import React from 'react';
import PaypalButton from '../PaypalButton';
import {PAYPAL_CONSTANTS} from '../../constants'
import PetProviderDropdown from '../../SiteParts/PetProviderDropdown'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const CLIENT = {
  sandbox: '',
  production: 'xxxXXX',
};

const ENV = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'sandbox';

class Donate extends React.Component {
  constructor(props) {
    super()
    this.state = {
    amountToDonate: '',
    petProvider:''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  //need to set the ammount
  handleChange(e) {
  e.preventDefault();
  this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const onSuccess = (payment) =>
      console.log('Successful payment!', payment);

    const onError = (error) =>
      console.log('Erroneous payment OR failed to load script!', error);

    const onCancel = (data) =>
      console.log('Cancelled payment!', data);

    return (

      <div className="AppHeader">
         <div>
         <p className="App-intro">
         <div style={{color:"#05349A", fontSize:"200%", paddingLeft:"21%", align:"center"}}>
           <b>Donate to one of our Pet Providers today!</b> <br/>
         </div>
         </p>

      <br/>
      <div style={{paddingLeft:'20%', paddingRight:'20%'}}>
      <Paper>
      <br/>
      <div style={{paddingLeft:'30%'}}>
      <p><b> How much would you like to donate? </b></p>
<div style={{paddingLeft:'11%', paddingRight:'8%'}}>
      <input type="text" name='amountToDonate' placeholder="Amount to Donate" onChange={this.handleChange} value={this.state.amountToDonate}/><br/>
</div>
      <div>
      </div>
<br/>
      <div>
      <b> Who would you like to donate it to? </b>
      <div style={{paddingLeft:'13%', paddingRight:'11%'}}><PetProviderDropdown /></div>
      </div>
<br/>
      <div style={{paddingLeft:'12%', paddingRight:'9%'}}>
        <PaypalButton
          client={CLIENT}
          env={ENV}
          commit={true}
          currency={'USD'}
          total={100}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
          amountToDonate={this.state.amountToDonate}
        />
        </div>
        </div>
        <br/>
        </Paper>
      </div>
      </div>
      </div>


    );
  }
}

export default Donate;
