import React from "react";

export default class NewsInput extends React.Component {
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
      <div className="newsinput">
        <h4>
          {this.props.label}
          <span>{this.props.required}</span>
        </h4>
        <input
          role="presentation"
          className="input"
          ref={this.input}
          type={this.props.type}
          placeholder={this.props.placeholder}
          defaultValue={this.props.defaultValue}
          required
          autoComplete="off"
        />
      </div>
    );
  }
}
