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
    let { _id, habitName, habitDesc, frequency, category, startDate, duration } = this.props.habit;
    return (
        <li className="displayList">

          <div className="row">

          <div className="card col m12">

              <div className="col s9 m9 category">
              <div className="name" onClick={this.props.toggleView(_id)}>
                <h4>{this.props.habit.habitName}</h4>
              </div>
              </div>

              <div className="col s3 m3 buttonArea">
                  <a className="btn-floating btn-large waves-effect waves-light red trash" onClick={() => this.removeHabit(_id)}>
                  <i className="material-icons md-48">&#xE92B;</i></a>
                  <a className="btn-floating btn-large waves-effect waves-light teal done">
                  <i className="material-icons md-48">&#xE86C;</i></a>
                  <a className="btn-floating btn-large waves-effect waves-light green edit">
                  <i className="material-icons md-48">&#xE254;</i></a>
            </div>
        </div>
        </div>

      </li>
    );
  }
};

export default HabitListItem;
