/**
 * Created by Daphne on 02.01.2017.
 */

import React, { Component } from 'react';
import './style.css';


class PracticalInfo extends Component {
    /* eslint-disable */
    constructor(props) {
        super(props);
        this.state = {
            language: this.props.language,
        };
    }

    updateState(language){
        this.state.language = language;
    };


    h2Text(){
        if(this.state.language === "no"){
            return "Hjem"
        }
        else if(this.state.language === "nl"){
            return "Voorpagina"
        }
        else{
            return "Home"
        }
    }


    render() {

        return (
            <div className="practicalInfoContent">

        
            </div>
        );
    }
}
export default PracticalInfo;
