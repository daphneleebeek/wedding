/**
 * Created by Daphne on 08.06.2017.
 */
import React from 'react';
import './style.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class MenuIcon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen || false,
        };
    }

    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
        if (this.props.onClick) {
            this.props.onClick(!this.state.isOpen);
        }
    }

    render() {
        let classes = classnames(
            'menuIcon', 
            {open: this.state.isOpen}
        );
        return (
            <div className={classes} onClick={() => this.handleClick()}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }
}

MenuIcon.propTypes = {
    onClick: PropTypes.func,
    isOpen: PropTypes.bool,
};

export default MenuIcon;

