// import _ from 'lodash';
var style = require('./style/globalStyle.css');
// var messages = require('./messages');

// import Button from './button';
// import User from './image';
// import Uppsala from './uppsalajs';

// var newMessage = () => (`
//  <p>
//     ${messages.hi} ${messages.event}
//     ${User}
//     ${Uppsala}
//  </p>
// `);

// import { multiply } from './mathStuff';

// const newMessage = () => (multiply(3,3));
// const newMessage = () => (`
//     <div class="${style.box}">
//         DEV: ${DEVELOPMENT.toString()}<br>
//         PROD: ${PRODUCTION.toString()}<br>
//     </div>
// `);

// var newMessage = () => (Button.button);

var app = document.getElementById('app');
// app.innerHTML = '<p>' + messages.hi + ' ' + messages.event + '</p>';
// app.innerHTML = newMessage();
// Button.attachEl();

app.innerHTML = `
    <div id="menu">
        <button id="loadPage1">Load Page 1</button>
        <button id="loadPage2">Load Page 2</button>
        <div id="content">
            <h1>Home</h1>
        </div>
    </div>
`;

document.getElementById('loadPage1').addEventListener('click', () => {
    System.import('./page1')
        .then(pageModule => {
            document.getElementById('content').innerHTML = pageModule.default;
        });
});
document.getElementById('loadPage2').addEventListener('click', () => {
    System.import('./page2')
        .then(pageModule => {
            document.getElementById('content').innerHTML = pageModule.default;
        });
});


if (DEVELOPMENT) {
    if (module.hot) {
        module.hot.accept();
    }
}
