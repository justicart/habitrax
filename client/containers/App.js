import React from 'react';
import Nav from '../components/Nav';
import MainForm from '../components/MainForm';
import Habits from '../components/Habits';

class App extends React.Component {
  state = { habits: [], detailsView: false };

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

  toggleView = () => {
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
          <button onClick={this.toggleView}>Stats here</button>
        </div>}
      </div>
    );
  }
}

export default App;
