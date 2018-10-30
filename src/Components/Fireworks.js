import React, { Component } from 'react'
import Firework from 'fireworks-react'

class Fireworks extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <Firework width={800} height={400}/>
    )
  }
}

export default Fireworks