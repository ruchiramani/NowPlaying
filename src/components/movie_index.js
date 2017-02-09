import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchMovies} from '../actions/index';
import { Link } from 'react-router';
import { Accordion, AccordionItem } from 'react-sanfona';
import Collapse, {Panel} from 'rc-collapse';




class MovieIndex extends Component {
  constructor(props){
          super();
          this.state = {
           pageNum: 1
           };
        }

  componentWillMount(){
    var orig = document.body.className
    document.body.className = 'main'
     this.props.fetchMovies(1);
  }

  handleClick(i){
         this.props.fetchMovies(i);
       }

 renderPageNums(){
 const rows =[];
        for(var i =1; i < 11; i++){
     rows.push(<li onClick={this.handleClick.bind(this, i)} key={i}> {i} </li>)
     }
  return rows;
   }

  renderMovies(){
    const movieArray =[];
    this.props.movies.map((movie) => {
      movieArray.push(
      <Panel header= {movie.title} key={movie.id}>
       <p> Description: {movie.overview} </p>
       <p> Average Rating: {movie.vote_average}</p>
       <Link to={"movies/" + movie.id} > See Reviews </Link>
       </Panel>
     );
    })
    return movieArray;
  };

  render() {
    return (
      <div style={{ margin: 10, width: 450 }} className="main">
      <div className="main-1">
        <br/>
              <h2> Now Playing </h2>
          <Collapse accordion={false}>
            {this.renderMovies()}
         </Collapse>
         </div>
         <div className="main-1">
      <ul className="pagination" >
          {this.renderPageNums()}
      </ul>
      </div>
      </div>

    )
  }
}
function mapStateToProps(state){
  return {movies: state.movies.all}
}

export default connect(mapStateToProps,{fetchMovies})(MovieIndex);
