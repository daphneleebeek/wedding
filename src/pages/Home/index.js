/**
 * Created by Daphne on 04.01.2017.
 */
import React, { Component } from 'react';
import './style.css';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: this.props.language,
        };
    }

    updateState(language){
        this.state.language = language;
    };

    render() {

        return (
            <div className="homeContent">
                <img className="ewoudandmonicaIMG" src={require('../../images/ewoudandmonica.jpg')} alt="Ewoud & Monica"/>
                <h1> 28.07.2018 </h1>
            </div>
        );
    }
}


export default Home;