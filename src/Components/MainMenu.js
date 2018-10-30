import React, {Component} from "react";
import Icon from 'react-icons-kit';
import {ellipsisV} from 'react-icons-kit/fa/ellipsisV';
import { Modal,Button } from 'react-bootstrap';
import { withRouter } from "react-router";
import firebase from '../firebase'

class MainMenu extends Component {
  constructor () {
    super()
    this.state = {
      showMainMenuModal: true
    };
    this.handleMainMenuClose = this.handleMainMenuClose.bind(this)
  }
  handleMainMenuClose () {
    this.setState({showMainMenuModal: !this.state.showMainMenuModal})
    this.props.history.goBack()
  }
  handleLogOut = async event => {
    event.preventDefault();
    try {
      const user = await firebase
        .auth()
        .signOut()
        console.log('Signed Out')
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };
  render() {
    return (
      <div>
        <Modal show={this.state.showMainMenuModal} onHide={this.handleMainMenuClose}>
          <Modal.Header>
            <a id="closeMainMenuBtn" onClick={this.handleMainMenuClose}><i className="fas fa-times fa-2x"></i></a>
            <Modal.Title id="listModalTitle" className='black-text'>Main Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='main-menu-logout-container'>
              <Button onClick={this.handleLogOut} className="btn btn-info btn-sm main-menu-logout-btn">Log Out</Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleMainMenuClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default withRouter(MainMenu)