import React from "react";

export default class NewsSelect extends React.Component {
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
      <div className="newsselect">
        <h4>{this.props.label} <span>{this.props.required}</span></h4>
        <select ref={this.input}>
          {this.props?.data.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}{" "}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
