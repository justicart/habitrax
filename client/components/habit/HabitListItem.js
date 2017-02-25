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
    let { _id, habitName, frequency, category } = this.props.habit;
    return (

        <li>
          <div class="row">

          <div className="card">
            <div className="buttonArea">
                <a className="btn-floating btn-med red" onClick={() => this.removeHabit(_id)}>
                <i className="material-icons">&#xE92B;</i></a>
                <a className="btn-floating btn-med waves-effect waves-light red">
                <i className="material-icons">&#xE86C;</i></a>
          </div>
          <div className="name" onClick={this.props.toggleView}>
            {this.props.habit.habitName}
          </div>
          <div className="buttonArea2">
          <button>EDIT</button>
          </div>
        </div>
        </div>


      </li>
    );
  }
};

export default HabitListItem;
