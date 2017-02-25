import React from 'react';

class HabitListItem extends React.Component {
  render() {
    let { _id, habitName } = this.props.habit;
    return (
      <li>
        <div className="name">{habitName}</div>
      </li>
    );
  }
};

export default HabitListItem;
