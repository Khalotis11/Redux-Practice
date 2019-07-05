import React, { Component } from "react";
import { connect } from "react-redux";

import { updateTitle } from "../actions";

class Title extends Component {
  state = {
    textInput: ""
  };
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  render() {
    return (
      <div className="input-container">
        <div className="title">{this.props.title}</div>
        <input
          type="text"
          name="textInput"
          placeholder="Text Input..."
          value={this.state.textInput}
          onChange={this.handleChange}
        />
        <button
          onClick={() => this.props.updateTitle(this.state.textInput)}
          type="submit"
        >
          Update Title
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    title: state.title
  };
};
export default connect(
  mapStateToProps,
  { updateTitle }
)(Title);
