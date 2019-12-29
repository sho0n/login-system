import React, from { Component } from 'react';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            name:'',
            password: '',
            password2: '',
            errors: {}
        };
    }
    render() {
        const { errors } = this.state;
    }
}
