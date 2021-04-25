function downlaodPromise() {
    return new Promise(function (resolve,reject) {
        console.log("Starting downloading file...");
        setTimeout(function() {
          console.log("Download Completed");
          resolve();
        },3000)
    })
}

let downloadedFile = downlaodPromise()

setTimeout(function() {
   downloadedFile.then(function () {
       console.log("After Download");
   })
},5000)