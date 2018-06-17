import React, { Component } from 'react'

class Page2 extends Component {
    state = {
        name: '',
        age: 0,
        location: ''
    }

  render = () => (
    <div>
      <h1>This is Page 2!</h1>
      <p>I am Scott</p>
      <p>27</p>
    </div>
  )
}

export default Page2
