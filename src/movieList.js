import { Component } from "react";
import MovieCard from "./moviecard";
class MovieList extends Component{
 
    render(){
         // const {title,plot,price,rating,poster,star,fav,addtoCart}=this.state.movies;
         const {movies, addStar, subStar, handlefav, handleCart}=this.props
       return(
        <>
           {/* <MovieCard title={title}
                      plot={plot}
                      poster={poster}
                      price={price}
                      rating={rating}
                      star={star}
                      fav={fav}
                      addtoCart={addtoCart}
           /> */}
           {movies.map((movies)=> <MovieCard 
                                 movies={movies} 
                                 addStar={addStar} 
                                 subStar={subStar} 
                                 handlefav={handlefav} 
                                 handleCart={handleCart} 
                                 key={movies.id}/>)}
            </>
       )
    }
}
export default MovieList;