import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  //constructor() {
  //super();
  //this.handleIncrement.bind(this);

  handleIncrement = () => {
    //console.log(product)
    this.setState({ count: this.state.value + 1 });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgesClases()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }
  getBadgesClases() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
