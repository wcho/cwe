import React from 'react';
import PropTypes from 'prop-types';

export default class Person extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        address: PropTypes.shape({
            country: PropTypes.string.isRequired,
            city: PropTypes.string
        }),
        contact: PropTypes.shape({
            phone: PropTypes.string,
            email: PropTypes.string
        }).isRequired
    }
}

Person.defaultProps = {
    name: "Anonymous"
};
