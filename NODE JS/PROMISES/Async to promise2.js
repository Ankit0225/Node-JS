function someasynctask (callback) {
    console.log("Beginning of Task");
    setTimeout(function () {
        console.log("End of Task");
      callback();
    },3000)
}
// promisification
let somepromise = function () {
    return new Promise(function (resolve,reject) {
        someasynctask(resolve)
    })
}
somepromise()
   .then(function () {
    console.log("After Work is complete");
})