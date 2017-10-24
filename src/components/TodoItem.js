import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <li className="completed">
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={true}
          />
          <label>Attend React Workshop</label>
          <button className="destroy" />
        </div>
      </li>
    );
  }
}

export default TodoItem;
