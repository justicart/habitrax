import React from 'react';

class HabitListItem extends React.Component {
  render() {
    return (
      <li>
        <div className="name">{this.props.habit.name}</div>
      </li>
    );
  }
};

export default HabitListItem;
