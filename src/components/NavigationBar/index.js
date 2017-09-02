import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import MenuList from './MenuList';
import MenuIcon from '../MenuIcon';

class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapseMenu: false,
            collapsedMenuOpen: false
        };
        this.collapseMenu = this.collapseMenu.bind(this);
    }

   handleMenuIconClick = () => {
        this.setState({
            collapsedMenuOpen: !this.state.collapsedMenuOpen,
        });
    }

    collapsedMenuOpen = collapsedMenuOpen => {
        if (collapsedMenuOpen) {
            return <MenuList classes="collapsedList" language={this.props.language}/>;
        }
        return null;
    } 

    collapseMenu = () => {
      if (window.innerWidth <= 768) {
        this.setState({ collapseMenu: true });
      } else {
        this.setState({ 
            collapseMenu: false,
            collapsedMenuOpen: false
         });
      }
    }

    componentDidMount = () => {
        this.collapseMenu();
        window.addEventListener("resize", this.collapseMenu);
    }

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.collapseMenu);
    }

    render() {
        
        return (
            <div>
                {this.state.collapseMenu ? 
                    <div className="navBar navBarCollapsed">
                        {this.collapsedMenuOpen(this.state.collapsedMenuOpen)}
                        <MenuIcon className="menuIcon" onClick={() => this.handleMenuIconClick()}/>
                    </div>
                    : <MenuList classes="navBar navBarNotCollapsed" language={this.props.language} />}
            </div>
        );
    }
}

NavigationBar.propTypes = {
    language: PropTypes.string
}

export default NavigationBar;

