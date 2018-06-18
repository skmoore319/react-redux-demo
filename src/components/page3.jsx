import React, { Component } from 'react';

class Page3Component extends Component {
  state = {
    name: '',
    age: 0,
    location: ''
  };

  render = () => (
    <div>
      <h1>Profile</h1>
      <p>Name: Bino</p>
      <p>Age: 24</p>
      <p>Location: Florida</p>
    </div>
  );
}

export default Page3Component;
