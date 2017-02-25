import React from 'react';
import HabitListItem from './habit/HabitListItem';

class Habits extends React.Component {
  render() {
    const habitList = this.props.habitListItems.map( habit => {
      return (
        <HabitListItem habit={habit} key={habit.id} />
      )
    })

    return (
      <div>
        <ul>
          { habitList }
        </ul>
      </div>
    );
  }
};

export default Habits;
