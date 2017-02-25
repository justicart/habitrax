import React from 'react';

class HabitListItem extends React.Component {
  removeHabit = (id) => {
    $.ajax({
      url: `/habits/${id}`,
      type: 'DELETE'
    }).done( () => {
      this.props.updateList();
    });
  }

  render() {
    let { _id, habitName, frequency, category } = this.props.habit;
    return (
      <li>
        <div className="name">{_id} {habitName} - {frequency}</div>
        <button onClick={() => this.removeHabit(_id)}>Remove</button>
      </li>
    );
  }
};

export default HabitListItem;
