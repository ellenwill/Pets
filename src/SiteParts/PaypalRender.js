import React from 'react';
import PaypalButton from './PaypalButton';
import {PAYPAL_CONSTANTS} from '../constants'
import PetProviderDropdown from '../SiteParts/PetProviderDropdown'

const CLIENT = {
  sandbox: '',
  production: 'xxxXXX',
};

const ENV = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'sandbox';

class PaypalRender extends React.Component {
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
         <div style={{color:"#05349A"}}>
            <h1> Donate to one of our Pet Providers today! </h1>
          </div>
         </p>

      <br/>
      <p> How much would you like to donate? </p>
      <input type="text" name='amountToDonate' placeholder="Amount to Donate" onChange={this.handleChange} value={this.state.amountToDonate}/><br/>
      <div>
      </div>
<br/>
      <div>
      <PetProviderDropdown />
      </div>
<br/>
      <div>
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
      </div>


    );
  }
}

export default PaypalRender;
