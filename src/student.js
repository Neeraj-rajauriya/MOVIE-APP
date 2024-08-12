import { Component } from "react";
class Student extends Component{
    render(){
        console.log(this.props);
        return(
            <>
             <h1>Hello , {this.props.name}</h1>
             <p>You have Scored {this.props.marks} %</p>
            <hr/>
            </>
        )
    }
}
export default Student;