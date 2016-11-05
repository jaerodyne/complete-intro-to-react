require('babel-register')
require('babel-polyfill')

// Create a browser-like environment for tests to run in
global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator
