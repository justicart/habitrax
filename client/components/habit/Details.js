import React from 'react';

class Details extends React.Component {
   render() {
     let { _id, habitName, habitDesc, frequency, category, startDate, duration } = this.props.habit;
     return (
       <div className="container">

         <button onClick={this.props.toggleView}>Back</button>

          <h1>{habitName}</h1>
          <h4> Category: {category}</h4>
          
          <p>START DATE: {startDate}</p>

         <p>You are tracking this habit for {duration} days.</p>


       </div>
     );
   }
 };

export default Details;
