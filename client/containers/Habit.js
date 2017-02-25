import React from 'react';
import List from '../components/habit/List';
import Stats from '../components/habit/Stats';

class Habit extends React.Component {
  render() {
    return (
      <div>
        <List />
        <Stats />
      </div>
    );
  }
};

export default Habit;
