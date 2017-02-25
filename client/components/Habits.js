import React from 'react';

class Habits extends React.Component {
  render() {
    const habitListItems = [{name: "First"}, {name: "Second"}]

    const habitList = habitListItems.map( habit => {
      return (
        <li>
          <div className="name">{habit.name}</div>
        </li>
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
