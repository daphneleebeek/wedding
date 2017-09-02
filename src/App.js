import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { headerText } from './texts';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import PracticalInfo from './pages/PracticalInfo';
import Map from './pages/Map';
import GiftList from './pages/GiftList';
import NotFound from './pages/NotFound';
import Select from './components/Select';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: "en"
        };
    }

    handleLanguageChange(option) {
        this.setState({ language: option.value });
    }

    render() {
        return (
            <Router>
                <div>
                    <div className="header"> 
                        <div className="selectContainer">
                            <p>Language: </p>
                            <Select
                                value={this.state.language}
                                options={
                                    [
                                        {value:'en', label: 'English'},
                                        {value:'nl', label: 'Nederlands'},
                                        {value:'no', label: 'Norsk'}
                                    ]}
                                onChange={(option) => this.handleLanguageChange(option)}
                                className="languageSelect"
                            />
                        </div>
                        <div className="headerText">
                            <h1>{headerText(this.state.language)}</h1>
                        </div>
                    </div>
                    
                    <NavigationBar language={this.state.language}/>

                    <div className="content">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/home" component={Home} />
                            <Route path="/practical_info" component={PracticalInfo} />
                            <Route path="/map" component={Map} />
                            <Route path="/gift_list" component={GiftList} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </div>

                    <footer>© 2017 Daphne Leebeek. All rights reserved.</footer>
                </div>
            </Router>
        );
    }
}

export default App;

