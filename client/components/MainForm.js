import React from 'react';

class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { habitName: '', habitDesc: '', frequency: '', category: '', duration: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }


  handleSubmit = (e) => {
    e.preventDefault();
    $.ajax({
      url: '/habits',
      type: 'POST',
      data: this.state
    }).done( habit => {
      this.props.updateList();
      document.getElementById('habitForm').reset();
    });

  }

  /*this.setState( {
    name: {habitNameInput.value}
  })*/

  render() {



    return (
      <div>
        <p>Goal Form (Temporary Title)</p>
        <form onSubmit={this.handleSubmit} id="habitForm">
          What is your goal?
          <input
            type="text"
            id="habitNameInput"
            name="habitName"
            value={this.state.value}
            onChange={this.handleChange}
          />
          How will you achieve it?
          <input type="text" name="habitDesc" />
          How often? <br />

          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    className="with-gap"
                    name="frequency"
                    type="radio"
                    id="daily"
                    value="daily"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="daily">Daily</label>
                </td>

              <td>
                <input
                  className="with-gap"
                  name="frequency"
                  type="radio"
                  id="weekly"
                  value="weekly"
                  onChange={this.handleChange}
                />
                <label htmlFor="weekly">Weekly</label>
              </td>

              <td>
                <input
                  className="with-gap"
                  name="frequency"
                  type="radio"
                  id="monthly"
                  value="monthy"
                  onChange={this.handleChange}
                />
                <label htmlFor="monthly">Monthly</label>
              </td>
              </tr>



              <tr>
                <td><h5>Start Date</h5>
                 <input
                   type="date"
                   className="datepicker"
                   name="startDate"
                   onChange={this.handleChange}
                 />

                </td>

                <td><h5>Days</h5>
                <input
                  type="text"
                  name="duration"
                  onChange={this.handleChange}
                />
                </td>

              </tr>

              <tr>
                <td>Category</td>
              </tr>

              <tr>
                <td>
                  <input
                    className="with-gap"
                    name="category"
                    type="radio"
                    id="personal"
                    value="personal"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="personal">Personal</label>
                </td>

                <td>
                  <input
                    className="with-gap"
                    name="category"
                    type="radio"
                    id="career"
                    value="career"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="career">Career</label>
                </td>

                <td>
                  <input
                    className="with-gap"
                    name="category"
                    type="radio"
                    id="education"
                    value="education"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="education">Education</label>
                </td>

                <td>
                  <input
                    className="with-gap"
                    name="category"
                    type="radio"
                    id="money"
                    value="money"
                    onChange={this.handleChange} />
                  <label htmlFor="money">Money</label>
                </td>
              </tr>
            </tbody>
          </table>

          <button className="btn waves-effect waves-light" type="submit" name="action">Submit

          </button>





        </form>
      </div>
    );
  }
};

export default MainForm;
