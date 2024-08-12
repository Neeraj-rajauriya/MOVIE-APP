import MovieCard from './moviecard';
import MovieList from './movieList';
import Student from './student';
import Navbar from './Navbar';
import { Component } from 'react';
import { movies } from './moviesData.js';
class App extends Component {
  constructor(){
    super();
    this.state={
       movies:movies,
       cartCount:0
    }
}
   addStar=(movie)=>{
    const {movies}=this.state;
    const mid=movies.indexOf(movie);
    if(movies[mid].star>=5){
       return;
    }
    movies[mid].star+=0.5;
    this.setState({
       movies:movies
    })
   }
   subStar=(movie)=>{
    const {movies}=this.state;
    const mid=movies.indexOf(movie);
    if(movies[mid].star<=0){
       return;
    }
    movies[mid].star-=0.5;
    this.setState({
       movies:movies
    })
   }

   handlefav=(movie)=>{
    const {movies}=this.state;
    const mid=movies.indexOf(movie);
    movies[mid].fav=!movies[mid].fav;
    this.setState({
       movies
    })
    }
    handleCart=(movie)=>{
       let {movies,cartCount}=this.state;
       const mid=movies.indexOf(movie);
       movies[mid].addtoCart=!movies[mid].addtoCart;
       if(movies[mid].addtoCart){
        cartCount += 1;
       }else{
        cartCount -= 1;
       }
       this.setState({
          movies:movies,
          cartCount:cartCount
       })
    }


  render(){
    const{movies,cartCount}=this.state
  return (
   <>
   <Navbar cartCount={cartCount}/>
   <MovieList movies={movies} 
              addStar={this.addStar} 
              subStar={this.subStar} 
              handlefav={this.handlefav} 
              handleCart={this.handleCart} 
              key={movies.id}/>
    </>
     
     
   
  )
}
}

export default App;
