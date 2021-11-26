const updater = require("apk-updater");
const express = require('express');

const app = express();
const port = 3000;

updater.enable(app, '/anyUpdateServerRoute', '.apk_repo');

app.get('/', function (req, res) {
    res.send('Welcome to my apk server, write /anyUpdateServerRoute at the end to go to the apks')
})

app.listen(port, _ => {
    console.log(`Im running at port ${port}`)
});

/* app.get('/download', function(req, res){
    const file = `${__dirname}/app/something.txt`;
    res.download(file); // Set disposition and send it.
}); */