import React from 'react';

class HabitListItem extends React.Component {
  render() {
    let { id, name } = this.props.habit;
    return (
      <li>
        <div className="name">{name}</div>
      </li>
    );
  }
};

export default HabitListItem;
