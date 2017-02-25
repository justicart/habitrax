import React from 'react';
import HabitListItem from './habit/HabitListItem';

class Habits extends React.Component {
  render() {
    const habitList = this.props.habitListItems.map( habit => {
      return (
        <HabitListItem updateList={this.props.updateList} habit={habit} key={habit._id} />
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
