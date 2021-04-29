import React, { Component } from "react";
import "./TodoItem.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    const { content, id } = this.props;
    return (
      <div>
        <div
          className={this.state.active ? "strike-through" : ""}
          onClick={this.toggleClass.bind(this)}
        >
          {content}
        </div>
        <span className="button" onClick={() => this.props.removeItem(id)}>
          Sil
        </span>
      </div>
    );
  }
}
export default Todo;
