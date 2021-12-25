const express = require('express');
const path = require('path');
const app = express();
// app.use(express.static(__dirname + '/dist/e-commerce'));
app.use(express.static('./dist/e-commerce'));
// app.get('/*', function(req,res) {
// res.sendFile(path.join(__dirname+
// '/dist/e-commerce/index.html'));});
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-app-heroku/'}),
);
app.listen(process.env.PORT || 8080);