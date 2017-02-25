import React from 'react';
import Nav from '../components/Nav';
import MainForm from '../components/MainForm';
import Habits from '../components/Habits';

class App extends React.Component {
  state = { habits: [] };

  componentDidMount() {
    $.ajax({
      url: '/habits',
      type: 'GET'
    }).done( habits => {
      this.setState({ habits });
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <h1>Main Habit Page</h1>
          <MainForm />
          <Habits habitListItems={this.state.habits} />
        </div>
      </div>
    );
  }
}

export default App;
