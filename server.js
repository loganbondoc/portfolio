const express = require('express');

const app = express();

app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
})

let server = app.listen(8888, function(){
    console.log('App server is running on port 8888');
});

app.use(express.static(__dirname + '/dist'));

res.sendFile(__dirname + '/dist/index.html')

// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve static files from the 'dist' directory
// app.use(express.static(path.join(__dirname, 'dist')));

// // Serve React app on all routes
// app.get('*', function(req, res){
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
// });

// const server = app.listen(8888, function(){
//     console.log('App server is running on port 8888');
// });
