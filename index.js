/**
 * Credit to skyyyy#7605 on Discord
 * This is my first template for all ppls
 */

const config = require('./variables/config.js')
const settings = require('./variables/settings.js')
const ct1 = settings.CENTERTEXT1;
const ct2 = settings.CENTERTEXT2;
const stylesheet = settings.STYLE;
const title = settings.TITLE;
const info = config.INFO;
const startupmsg = config.STARTUPMSG;
const port = config.PORT;
const msg1 = settings.MSG1;
const msg2 = settings.MSG2;
const msg3 = settings.MSG3;
const msg4 = settings.MSG4;
const msg5 = settings.MSG5;
const express = require('express');
const app = express();

// Starting Express Web Server

app.listen(port) // Change this on ./variables/config.js
console.log(startupmsg + info + port); // Change this on ./variables/settings.js

// URL Checker and displayer

app.get('/', (req, res) => {
    res.send(title + stylesheet + ct1 + msg1 + ct2)
})

app.get('/msg2', (req, res) => {
    res.send(title + stylesheet + ct1 + msg2 + ct2)
})

app.get('/msg3', (req, res) => {
    res.send(title + stylesheet + ct1 + msg3 + ct2)
})

app.get('/msg4', (req, res) => {
    res.send(title + stylesheet + ct1 + msg4 + ct2)
})

app.get('/msg5', (req, res) => {
    res.send(title + stylesheet + ct1 + msg5 + ct2 )
})