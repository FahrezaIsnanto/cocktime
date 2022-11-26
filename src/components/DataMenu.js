import { Component } from "react";
import "./MenuStyles.css";


class DataMenu extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className="menu-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
            </div>
            <div className="image">
                <img alt="img" src={this.props.img1}/>
            </div>


        </div>  
        );
    };
}

export default DataMenu;