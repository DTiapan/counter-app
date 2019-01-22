import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-3">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col-sm-9">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-primary btn-md"
            >
              +
            </button>

            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className={this.getButtonClasses()}
            >
              -
            </button>

            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger"
            >
              &times;
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  getButtonClasses() {
    let classes = "btn btn-info btn-md m-2 ";
    classes += this.props.counter.value === 0 ? "disabled" : "active";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
