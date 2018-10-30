import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Button, Modal } from 'react-bootstrap'
import firebase from '../../firebase'
import Database from '../../Components/Database'
import MessagePrompt from '../../Components/MessagePrompt'
import { compose } from 'redux';
import { view, store } from 'react-easy-state';
import listStore from '../../Components/DataStore'

class DeleteSubListModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listId: listStore.mainListId,
      subListId: listStore.subListId,
      listTitle: listStore.subListTitle,
      fromLocation: this.props.location.state.fromLocation,
      listType: this.props.location.state.listType
    }
    this.handleDelClose = this.handleDelClose.bind(this)
  }

  componentWillMount () {

  }

  handleEditClose () {
    this.props.history.push('/')
  }

  handleDelClose () {
    this.props.history.goBack();
  }

  deleteList () {
    let userId = firebase.auth().currentUser.uid
    Database.deleteSubList(userId, this.state.listId, this.state.subListId)

    this.setState({showDeletePrompt: true});
    setTimeout(function () { this.setState({showDeletePrompt: false}); }.bind(this), 2000);
    setTimeout(function () {
      if(this.state.fromLocation == 'items') {
        this.props.history.replace('/Lists/' + listStore.mainListTitle.split(' ').join(''))
      }
      this.props.history.replace('/Lists/' + listStore.mainListTitle.split(' ').join(''))
    }.bind(this), 1000);
  }

  render () {
    return (
      <div>
        <Modal show={true} onHide={this.handleDelClose}>
          <Modal.Header>
            <a className="close-delete-btn" onClick={this.handleDelClose}><i className="fas fa-times fa-2x"></i></a>
            <Modal.Title id="listModalTitle" className='black-text'>Delete<div style={{margin: 3}}></div><strong>{this.state.listTitle}</strong>?</Modal.Title>
          </Modal.Header>
          <Modal.Footer className='edit-footer'>
            <Button onClick={() => this.deleteList()}
                    className="edit-save-btn delete-btn" bsStyle="danger" bsSize="large" block>Delete
            </Button>
          </Modal.Footer>
        </Modal>
        {this.state.showDeletePrompt ? <MessagePrompt message='Deleted!'/> : null}
      </div>
    )
  }
}

export default compose(withRouter, view) (DeleteSubListModal)