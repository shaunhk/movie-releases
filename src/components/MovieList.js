import React, {Component} from 'react';
import Movie from './Movie'

class MovieList extends Component {
  render(){
    const movieNodes = this.props.data.map(movie => {
      return(
        <Movie name={movie.name} url={movie.url} />
      )
    })
    return (
      <>
        {movieNodes}
      </>
    )
  }
}
export default MovieList;
