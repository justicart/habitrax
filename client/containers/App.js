import React from 'react';
import Nav from '../components/Nav';
import MainForm from '../components/MainForm';
import Habits from '../components/Habits';
import Details from '../components/habit/Details';
class App extends React.Component {
  state = { habits: [], habit: "", detailsView: false };

  componentDidMount() {
    this.updateList();
  }

  updateList = () => {
    $.ajax({
      url: '/habits',
      type: 'GET'
    }).done( habits => {
      this.setState({ habits });
    });
  }

  getHabit = (id) => {
    $.ajax({
      url: `habits/${id}`,
      type: 'GET'
    }).done( habit => {
      console.log(habit);
      this.setState({ habit });
    });
  }

  toggleView = (id) => {
    this.getHabit(id);
    this.setState({
      detailsView: !this.state.detailsView
    });
  }

  render() {
    return (
      <div>
        <Nav />
        {!this.state.detailsView && <div className="container">
          <h1>Main Habit Page</h1>
          <MainForm updateList={this.updateList} />
          <Habits updateList={this.updateList} toggleView={this.toggleView} habitListItems={this.state.habits} />
        </div>}
        {this.state.detailsView && <div>
          <Details toggleView={this.toggleView} habit={this.state.habit} />
          {this.state.habit.habitName}
        </div>}
      </div>
    );
  }
}

export default App;
