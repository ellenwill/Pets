//This is my showing how to use github
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import scriptLoader from 'react-async-script-loader'
import paypal from 'paypal-checkout'
import {PAYPAL_ID} from '../constants'




class PayPalButton extends Component {
  constructor(props) {
    super(props)
    window.React = React
    window.ReactDOM = ReactDOM
    this.state = {
      showButton: false,
    }
  }



  componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
    if (!this.state.show) {
      if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
        if (isScriptLoadSucceed) {
          this.setState({ showButton: true })
          console.log('alehop!!', paypal.Button.driver('react', { React, ReactDOM }))
        }
        else this.props.onError()
      }
    }
  }

  componentDidMount () {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props
    if (isScriptLoaded && isScriptLoadSucceed) {
      this.setState({ showButton: true })
    }
  }

  componentWillUnmount() {
    delete window.React
    delete window.ReactDOM
  }

  render() {
    const client = {
      sandbox:    'AZTgVpcOy33Gl1mv4qzOi3znpx3vLMMMo5Qad4_btMXUWJ4etnmNt-XzEYT9lriaYQhUIjK0hxyn41OQ',
      production: 'xxxxxx',
    }
    const{
      total,
      currency,
      env,
      commit,
      onSuccess,
      onError,
    }= this.props;

      const {showButton} = this.state;


    const payment = () => {
      return paypal.rest.payment.create('sandbox', client,
        {
          transactions: [
            { amount: { total: '1.00', currency: 'USD' } },
          ],
        },
      )
    }

    const onAuthorize = (data, actions) => {
      return actions.payment.execute().then(() => {
        console.log('The payment was completed!', this)
        this.setState({ showButton: false })
        const payment = Object.assign({}, this.props.payment)
        payment.paid = true
        payment.cancelled =  false
        payment.payerID =  data.payerID
        payment.paymentID =  data.paymentID
        payment.paymentToken =  data.paymentToken
        payment.returnUrl =  data.returnUrl

      })
    }

    const onCancel = (data) => {
      console.log('The payment was cancelled!', data)
    }

    const PayPalButton = paypal.Button.driver('react', { React, ReactDOM });
    return (
      <div>
        {showButton && <PayPalButton
          env={env}
          client={client}
          commit={commit}
          payment={payment}
          onAuthorize={onAuthorize}
          onCancel={onCancel}
          onError={onError}
        />}
      </div>
    );
  }
}


export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(PayPalButton);
