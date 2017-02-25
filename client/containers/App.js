import React from 'react';
import Nav from '../components/Nav';
import MainForm from '../components/MainForm';
import Habits from '../components/Habits';

class App extends React.Component {
  render() {
    const habitListItems = [{id: 1, name: "First"}, {id: 2, name: "Second"}, {id: 3, name: "Hello"}];
    return (
      <div>
        <Nav />
        <div className="container">
          <h1>Main Habit Page</h1>
          <MainForm />
          <Habits habitListItems={habitListItems} />
        </div>
      </div>
    );
  }
}

export default App;
