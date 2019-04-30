import React, { Component } from 'react';

import Smurf from './Smurf';

const Smurfs = props => {
  const headline = {
    textDecoration: 'underline',
    width: '32.1%',
    margin: '16px auto',
    border: '1px solid black',
    borderRadius: '3px',
    background: 'gray',
    color: 'white',
    boxShadow: '5px 5px 5px #D2D2D2',
  }

  const style = {
    border: '1px solid black',
    width: '30%',
    boxShadow: '5px 5px 5px #D2D2D2',
    margin: '16px auto',
    borderRadius: '3px',
    background: 'gray',
    color: 'white'
}

  // console.log(props)

  // render() {
    return (
      <div className="Smurfs">
        <h1 style={headline}>Smurf Village</h1>
        <ul style={style}>
          {props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }


Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
