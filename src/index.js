// import _ from 'lodash';
var messages = require('./messages');

// import Button from './button';
// import User from './image';
// import Uppsala from './uppsalajs';

// var newMessage = () => (`
// 	<p>
// 		${messages.hi} ${messages.event}
// 		${User}
// 		${Uppsala}
// 	</p>
// `);

import {multiply} from './mathStuff';

const newMessage = () => (multiply(3,3));

// var newMessage = () => (Button.button);

var app = document.getElementById('app');
// app.innerHTML = '<p>' + messages.hi + ' ' + messages.event + '</p>';
app.innerHTML = newMessage();

// Button.attachEl();

if (module.hot) {
    module.hot.accept();
}
