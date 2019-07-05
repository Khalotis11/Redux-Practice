import React, { Component } from "react";
import { connect } from "react-redux";

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
        <form>
          <input
            type="text"
            name="textInput"
            placeholder="Text Input..."
            value={this.state.textInput}
            onChange={this.handleChange}
          />
          <button type="submit">Update Title</button>
        </form>
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
  {}
)(Title);
