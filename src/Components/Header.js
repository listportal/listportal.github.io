import React, {Component} from "react";
import Icon from 'react-icons-kit';
import {ellipsisV} from 'react-icons-kit/fa/ellipsisV';
import { withRouter } from "react-router";
import ShoppingCartImage from './../Img/shoppingCart-image.png'

class Header extends Component {
  constructor () {
    super()
    this.state = { };
  }

  render() {
    return (
      <header style={{padding: 0}}>
        <div className='wrapper'>
          <img src={ShoppingCartImage} id='header-img' className="App-logo" alt="logo" onClick={() => this.props.history.push('/')}/>
          <h1 className='header-title' style={{marginBottom: 0}} onClick={() => this.props.history.push('/')}>List Portal<hr className="hrFormat" style={{borderColor: '#343a40'}}/></h1>
          <Icon className='menu-icon' icon={ellipsisV} size={40} onClick={() => this.props.history.push('/MainMenu')}/>
        </div>
      </header>
    )
  }
}

export default withRouter(Header)
