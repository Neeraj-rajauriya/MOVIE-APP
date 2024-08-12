import { Component } from "react";
import { movies } from "./moviesData";
class movieCard extends Component{
   
    // addstar=()=>{
    //     // this.state.star+=0.5;
    //     // console.log("this.state.star:",this.state.star);
    
    //     if(this.state.star>=5){
    //         return;
    //     }
    //     this.setState({
    //        star: this.state.star + 0.5
    //     },()=>{
    //         console.log("this.state.star:",this.state.star);
    //     })
    //     // this.setState((prevState)=>{
    //     //     return {
    //     //         star: prevState.star+0.5

    //     //     }
    //     // })
    //     console.log("this.state.star:",this.state.star);
    // }
    // Substar=()=>{
    //     // this.state.star+=0.5;
    //     // console.log("this.state.star:",this.state.star);
    //     if(this.state.star<=0){
    //         return;
    //     }
    //     this.setState({
    //        star: this.state.star - 0.5
    //     },()=>{
    //         console.log("this.state.star:",this.state.star);
    //     })
    //     // this.setState((prevState)=>{
    //     //    if(prevState.star>0){
    //     //     return {
    //     //         star: prevState.star - 0.5
    //     //     }
    //     //    }
    //     // })
    //     // console.log("this.state.star:",this.state.star);
    // }
    // handlefav=()=>{
    //     this.setState({
    //         fav:!this.state.fav
    //     })
    // }
    // handleCart=()=>{
    //     this.setState({
    //         addtoCart:!this.state.addtoCart
    //     })
    // }
    render(){
        const {title,plot,price,rating,poster,star,fav,addtoCart}=this.props.movies;

        const {movies,subStar,addStar,handlefav,handleCart}=this.props;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                         <img alt="poster" src={poster}/>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>
                  
                    <div className="footer">
                         <div className="rating">{rating}</div>
                         <div className="star-dis">
                            <img alt="decrease" src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" className="str-btn" onClick={()=>{subStar(movies)}}/> 
                            <img alt="star" src="https://cdn-icons-png.flaticon.com/128/477/477406.png" className="stars"/>
                            <img alt="increase" src="https://cdn-icons-png.flaticon.com/128/992/992651.png" className="str-btn" onClick={()=>{addStar(movies)}}/> 
                            <span className="starCount">{star}</span>
                         </div>
                         {
                            fav?<button className="favourite-btn" onClick={()=>{handlefav(movies)}}>favourite</button>:<button className="unfavourite-btn" onClick={()=>{handlefav(movies)}}>unfavourite</button>
                         }
                         {
                            addtoCart?<button className="remove-cart-btn" onClick={()=>{handleCart(movies)}}>Remove from cart</button>:<button className="cart-btn" onClick={()=>{handleCart(movies)}}>Add to cart</button>
                         }
                         
                    </div>
                    </div>

                </div>
            </div>
        )
   
    }
}

export default movieCard;