import React, {Component} from 'react';

class Movie extends Component {

  render(){
    return(
    <div className="movie">
      <a href={this.props.url}><p>{this.props.name}</p></a>
    </div>
  )
  }
}
export default Movie;
