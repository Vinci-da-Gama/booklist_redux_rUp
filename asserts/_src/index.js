import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
const {Component} = React;
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';

import SuccessButton from './components/react-bs-someBtns';
// import reducers from './reducers';
const divContainer = document.querySelector('div.container');

const CommentBox = React.createClass({
    render: function() {
        return ( 
        	<div className = "commentBox" >
            	Hello, world. -- I am a CommentBox.
	            <SuccessButton />
            </div>
        );
    }
});

ReactDOM.render( < CommentBox / >, divContainer );