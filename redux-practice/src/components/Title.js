import React, { Component } from "react";

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
export default Title;
