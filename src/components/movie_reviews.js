import React, {Component} from 'react';
import {connect} from 'react-redux';

export default class MovieReviews extends Component {

  renderReviews(){
    if(this.props.reviews.length == 0){
      return <div> No Reviews Yet </div>;
    }

    return this.props.reviews.map((review) => {
      return (
      <li key={review.id} className="list-group-item">
          <h6 className="list-group-item-heading"> {review.author}</h6>
          <p className="list-group-item-text"> {review.content}</p>
      </li>
    )})
  }

  render() {
    return (
      <div>
      <center>
      <h3> Reviews </h3>
       <ul className="list-group">
         {this.renderReviews()}
      </ul>
      </center>
     </div>
    );
  }
}
