const fs = require('fs')

fs.readFile(__dirname + '/myfile.txt', function(error, data) {
    if (error) throw error

    console.log(data.toString());
})