import { Component } from "react";
import "./DetailCard.css";


class DetailCard extends Component {
    render() {
        return (
            <div className="detail-container">
                <p className="card-text">Beer</p>
                <div className="child-container">
                    <div className="image-container">
                        <img alt="img" src="https://images.unsplash.com/photo-1669438361929-42910a7a5227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60" />
                    </div>
                    <div className="instruction-container">
                        <div className="instructions">
                            <h2>Instructions</h2>
                            <p>lorem</p>
                        </div>
                        <div className="lists">
                            <h2>Ingredients</h2>
                            <ul>
                                <li>ayam</li>
                                <li>ikan</li>
                                <li>air</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default DetailCard;