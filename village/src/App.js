import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, NavLink, Link, withRouter } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data })
        // console.log(response.data)
      })
      .catch(error => console.log(error))
  }

  addANewSmurf = newSmurf => {
    console.log(newSmurf)
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(response => {
        this.setState({ smurfs: response.data})
        this.props.history.push('/')
      })
      .catch(error => {
        console.log(error)
      })
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    const navStyle = {
      textDecoration: 'none',
      fontSize: '25px',
      margin: '16px auto',
      border: '1px solid black',
      borderRadius: '3px',
      background: 'gray',
      color: 'white',
      width: '30%',
      boxShadow: '5px 5px 5px #D2D2D2',
      display: 'flex',
      justifyContent: 'center'
    }


    return (
      <div className="App">
        <nav>
          <NavLink style={navStyle} exact to='/'>Home</NavLink>
          <NavLink style={navStyle} exact to='/add-smurf'>Add Smurf</NavLink> 
        </nav>
        <Route exact path='/' render={( props ) => <Smurfs {...props} smurfs={this.state.smurfs} />}/>
        <Route path='/add-smurf' render={( props ) => <SmurfForm {...props} addANewSmurf={this.addANewSmurf} />} />
        {/* <SmurfForm /> */}
        {/* <Smurfs smurfs={this.state.smurfs} /> */}
      </div>
    );
  }
}

export default withRouter(App);
