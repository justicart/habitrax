import React from 'react';

class MainForm extends React.Component {
  render() {
    return (
      <div>
        <p>Goal Form (Temporary Title)</p>
        <form action="#">
          What is your goal?
          <input type="text" name="habitName" />
          How will you achieve it?
          <input type="text" name="habitDesc" />
          How often? <br />

          <table>
            <tbody>
              <tr>
                <td>
                  <input className="with-gap" name="frequency" type="radio" id="daily"  />
                  <label htmlFor="daily">Daily</label>
                </td>

              <td>
                <input className="with-gap" name="frequency" type="radio" id="weekly"  />
                <label htmlFor="weekly">Weekly</label>
              </td>

              <td>
                <input className="with-gap" name="frequency" type="radio" id="monthly"  />
                <label htmlFor="monthly">Monthly</label>
              </td>
              </tr>

              

              <tr>
                <td><h5>Start Date</h5>
                 <input type="date" className="datepicker" />

                </td>

                <td><h5>End Date</h5>
                <input type="date" className="datepicker" />
                </td>

              </tr>

              <tr>
                <td>Category</td>
              </tr>

              <tr>
                <td>
                  <input className="with-gap" name="category" type="radio" id="personal" />
                  <label htmlFor="personal">Personal</label>
                </td>

                <td>
                  <input className="with-gap" name="category" type="radio" id="career" />
                  <label htmlFor="career">Career</label>
                </td>

                <td>
                  <input className="with-gap" name="category" type="radio" id="education" />
                  <label htmlFor="education">Education</label>
                </td>

                <td>
                  <input className="with-gap" name="category" type="radio" id="money" />
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
