
function download (url) {
    return new Promise (function (resolve,reject) {
        if (!url.startsWith("http")) {
            reject(new Error("URl does not start with http"))
        } else {
            console.log("Start Download : " + url);
            setTimeout(function(){ //fake 3 second download task
                  let filename = url.split("/").pop()    
                  resolve(filename)     
            },3000)
        }
    })
} 

function resize (filename) {
    return new Promise(function(resolve,reject) {
        if(!filename.endsWith(".png")) {
            reject(new Error("file is not png"))
        } else {
            console.log("Start resize : " + filename);
            setTimeout(function () {// fake 3-second resize task
        //     change x.png -> x-resized.png
            let resizedFile = filename.split(".")[0] + "-resized" + ".png"
            resolve(resizedFile)
        }, 3000)
       }
    })
}

function upload (resizesFileName) {
    return new Promise(function (resolve,reject) {
        console.log("Start Upload : " + resizesFileName);
        setTimeout(function() { // fake 3-second upload task
          let Uploadurl = "http://imgur.com/" + resizesFileName
          resolve(Uploadurl)
        }, 3000)
    })
}

download ('http://link.any/logo.png')
//    .then(resize)
   .then(upload)
   .then(function(Uploadurl){
       console.log("File was Uploaded to : " + Uploadurl);
   })
  .catch(function (error) {
      console.error(error);
  })