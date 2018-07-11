import React, { Component } from 'react'
import DBTools from '../DBTools/DBTools'
import {PET_PROVIDER, EXISTING_PET_PROVIDER, STATES} from '../constants'

class AddPetProvider extends Component{

  constructor(props) {
    super(props);
    if (props.petProvider) {this.state = EXISTING_PET_PROVIDER(props.petProvider)}
    else {this.state = PET_PROVIDER}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fillInfo= this.fillInfo.bind(this);
    this.submitter = new DBTools();
  }

  componentDidMount(props){
    
    //If the pet provider doesn't already exist, we can't have filled in its info.
    if (!this.state.petProviderID)
    {
      //console.log(props.petID)
        this.setState(PET_PROVIDER);  
    }
    else
    {
      this.fillInfo(this.submitter.populatePetProviders(this.state.petProviderID)[0])
    }
  }

  fillInfo(info){
    this.setState(info)
  }

  componentWillMount(props)
  {

  }

  render(){
    return(
      <div className="AppHeader">
         <div>
         <p className="App-intro">
           <h1> Enter pet provider information here: </h1>
         </p>
         <section className='testForm'>
           <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            {this.locationMenu()}
            {this.state.usstate && 
              <div>
              Name: <input type="text" name="name" placeholder="What is the facility's name?" onChange={this.handleChange} value={this.state.name}/><br/>
              <input type="text" name="street" placeholder="Street Address" onChange={this.handleChange} value={this.state.street}/><br/>
              <input type="text" name="city" placeholder="City" onChange={this.handleChange} value={this.state.city}/><br/>
              <input type="text" name="zip" placeholder="Zip" onChange={this.handleChange} value={this.state.zip}/><br/>
              <input type="text" name="photoURL" placeholder="Enter photo URL." onChange={this.handleChange} value={this.state.photoURL}/><br/>
              {!this.state.petProviderID && <button> Add Pet Provider </button>}
              {this.state.petProviderID && <button> Update Pet Provider</button>
            }
            </div>}
           </form>
           </section>
         </div>
       </div>
    )
  }

  locationMenu(){
    return <div>
    <label><select name="usstate" onChange={this.handleChange} value={this.state.usstate}>
    {!this.state.usstate && <option> State </option>}
    { STATES.map(value => <option value={value}>{value}</option>) }
    </select></label>
    </div>
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
    [e.target.name]: e.target.value
    });
    console.log(this.state)
  }
  handleSubmit(e) {
    e.preventDefault();
    //Submit the pet if it doesn't exist, otherwise update it.
    if (!this.state.petProiderID){var key = this.submitter.addPetProvider(this.state);
    this.setState(PET_PROVIDER);
    }
    else {this.submitter.updatePet(this.state)
    this.props.onSubmit(e.target.value)}
    //this.setState(this.state)
    return key;
  }
}

export default AddPetProvider