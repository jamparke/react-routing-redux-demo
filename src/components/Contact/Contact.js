import React, { Component } from 'react';
import axios from 'axios';

import Me from './components/Me/Me';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    componentWillMount() {

    }
    async componentDidMount() {
        // const response = await axios.get('https://www.swapi.co/api/people/1');
        // this.setState({ name: response.data.name });
    }
    componentWillReceiveProps(props, nextProps) {
        
    }
    render() {
        return <div>
            {this.state.name && <Me name={this.state.name} />}
        </div>
    }
    componentWillUnmount() {

    }
}
