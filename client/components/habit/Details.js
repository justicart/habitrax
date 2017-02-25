import React from 'react';

class Details extends React.Component {
   render() {
     let { _id, habitName, frequency, category } = this.props.habit;
     return (
       <div className="container">

       <button onClick={this.props.toggleView}>Back</button>
       <h1>{habitName}</h1>
       </div>
     );
   }
 };

export default Details;
