import React from "react";
import { Component } from "react";
import styled from "styled-components";
const Nav=styled.div` 
        width:100%;
        height:70px;
        background-color:#4267b2;
        display:flex;
        justify-content:space-between;
        align-items:center;
        position:relative;
        `

const Title=styled.div`
        font-size:30px;
        color:#fff;
        font-weight:600;
        font-family:Montserrat, sans-serif;
        textTransform:uppercase;
        margin-left:20px;
        padding-top:5px;
        &:hover{
        color:red;
        }
`
const Cartcontainer=styled.div`
        position:relative;
        cursor:pointer;
`
const CartIcon=styled.img`
        height:48px;
        margin-right:20px;
        color:white;
        padding-top:5px
`
const Cartcount=styled.span`
        background-color:${(props)=>props.color};
        color:black;
        border-radius:50%;
        padding:4px 8px;
        position:absolute;
        right:10px;
        font-size:12px;
        top:-5px;
        visibility:${(props)=>props.show?"visible":"hidden"};
`


class Navbar extends Component{
    render(){
        const {cartCount}=this.props;
        return (
            <>
            <Nav>
                <Title>
                    Moive-App
                </Title>
                <Cartcontainer>
                    <CartIcon  src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" alt="Image Icon"></CartIcon>
                    <Cartcount color="yellow" show={true}>{cartCount}</Cartcount>
                </Cartcontainer>
            </Nav>
            </>
        )
    }
}
export default Navbar;

const style={
    nav:{
        width:"100%", 
        height:70, 
        background:"#4267b2", 
        display:"flex" ,
        justifyContent:"space-between",
        alignItem:"center",
        position:"relative"
    },
    title:{
        fontSize:30,
        color:"#fff",
        fontWeight:600,
        fontFamily:'"Montserrat", sans-serif',
        textTransform:"uppercase",
        marginLeft:20,
        paddingTop:10,
        marginTop:5
    },
    cartContainer:{
        position:"relative",
        cursor:"pointer"
    },
    cartIcon:{
        height:48,
        marginRight:20,
        color:"white",
        paddingTop:5
    },
    cartCount:{
        background:"yellow",
        color:"black",
        borderRadius:"50%",
        padding:"4px 8px",
        position:"absolute",
        right:10,
        fontsize:12,
        top:-5
    }
}