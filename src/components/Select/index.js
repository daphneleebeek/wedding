import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';
import './style.css';

class Select extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.initialValue || '',
        };
    }

    handleChange(value) {
        this.setState({
            value,
        });
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }

    render() {
        const other = this.props;
        delete other.styles;

        return (
            <ReactSelect
                searchable={false}
                clearable={false}
                value={this.state.value}
                {...other}
                onChange={value => this.handleChange(value)}
            />
        );
    }
}

Select.propTypes = {
    onChange: PropTypes.func,
    initialValue: PropTypes.string,
};
export default Select;