import React, {Component} from "react";
import { Modal } from 'react-bootstrap'

class MessagePrompt extends Component {
  constructor (props) {
    super(props)
    this.state = { };
  }

  render() {
    return (
      <Modal show={true} data-dismiss="modal" id="editSavePrompt">
        <div>
          <p id="editSaveText">{this.props.message}</p>
        </div>
      </Modal>
    )
  }
}

export default MessagePrompt
