var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + '/index.html', '<h1>HTML is great</h1> <h2 style="background:#4CAE50;color:#fff;">Hello world</h2>', function(error){
    if (error) {
        return console.log(error);
    } else {
        return console.log('Congrats');
    }
});

var myPhotoLocation = 'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1c4c9f932c9cbe674f8e71f82cd4ee1d&auto=format&fit=crop&w=500&q=60';
https.get(myPhotoLocation, function(response){
    response.pipe(fs.createWriteStream(__dirname + "/beach-pic-1.jpg"));
});

