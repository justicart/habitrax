import React from 'react';
class HabitListItem extends React.Component {
  render() {
    return (
        <li>
          <div class="row">

          <div className="card">
            <div className="buttonArea">
                <a className="btn-floating btn-med red">
                <i className="material-icons">&#xE92B;</i></a>
                <a className="btn-floating btn-med waves-effect waves-light red">
                <i className="material-icons">&#xE86C;</i></a>
          </div>
          <div className="name">
            {this.props.habit.name}
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
