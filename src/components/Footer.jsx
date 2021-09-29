import React from "react";
import "./styles.css";

var date = new Date();
var currentYear = date.getFullYear();

function Footer(){
    return(
        <div className="footer">
            <p>Copyright &copy; {currentYear}</p>
        </div>
    );
}

export default Footer;