import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.getValue = this.getValue.bind(this);
  }

  getValue() {
    return this.input.current.value;
  }

  render() {
    return (
      <div className="input">
        <label htmlFor="input">{this.props.label}</label>
        <input
          className="input"
          ref={this.input}
          type={this.props.type}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}
