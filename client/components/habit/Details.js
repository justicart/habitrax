import React from 'react';

class Details extends React.Component {
   render() {
     let { _id, habitName, habitDesc, frequency, category, startDate, duration } = this.props.habit;
     return (
       <div className="container">

         <button onClick={this.props.toggleView}>Back</button>
         <h1>{habitName}</h1>
         <p>{duration}</p>
         <Calendar habit={this.habit} />
       </div>
     );
   }
 };

export default Details;
