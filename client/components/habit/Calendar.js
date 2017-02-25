import React from 'react';

class Calendar extends React.Component {
  state = { days: [...this.props.habit.days] }

  toggleCompletion = () => {
    console.log("blah");
  }

  render() {
    const days = this.props.habit.days.map( (day, index) => {
      return (
        <li className={day.completed ? 'completed' : ''}>
          <div onClick={this.toggleCompletion(index)}>{ index + 1 }</div>
        </li>
      )
    })
    return (
      <div>
        <ul className="calendar">
          { days }
        </ul>
      </div>
    );
  }
};

export default Calendar;
