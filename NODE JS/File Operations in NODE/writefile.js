const fs = require('fs')

fs.writeFileSync(__dirname + '/myfile.txt', "some data",function (error) {
    if (error) throw error

    console.log("File was written")
})