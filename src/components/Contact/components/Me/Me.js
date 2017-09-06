import React from 'react';
import PropTypes from 'prop-types';

const Me = ({name}) => <h1>Hello, {name}</h1>;

Me.propTypes = {
    name: PropTypes.string.isRequired
}

export default Me;
