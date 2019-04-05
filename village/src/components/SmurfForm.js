import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const inputStyle = {
      width: '50%',
      borderRadius: '6px',
      textAlign: 'center',
      margin: '8px auto',
      border: '1px solid gray',
      boxShadow: '1px 1px 1px #D2D2D2',
  }

  const btnStyle = {
    width: '35%',
    height: '30px',
    margin: '8px auto',
    borderRadius: '6px',
    boxShadow: '1px 1px 1px #D2D2D2'
}

    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            style={inputStyle}
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            style={inputStyle}
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            style={inputStyle}
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <br/>
          <button style={btnStyle} onClick={this.addSmurf} type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
