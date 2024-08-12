import React from "react";
import { Component } from "react";
import styles from "./navbar.module.css"

class Navbar extends Component{
    render(){
        return (
            <>
            <div className={styles.nav}>
                <div className={styles.title}>
                    Moive-App
                </div>
                <div className={styles.cartContainer}>
                    <img  className={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" alt="Image Icon"/>
                    <span className={styles.cartCount}color="yellow" show={true}>5</span>
                </div>
            </div>
            </>
        )
    }
}
export default Navbar;

