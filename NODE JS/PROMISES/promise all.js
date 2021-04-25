
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

Promise.all([
    download('http://any.lk/logo.png'),
    download('http://any.lk/banner.png'),
    download('http://any.lk/promo.png'),
    download('http://any.lk/name.png'),
    download('http://any.lk/profile.png')
]).then(function (downloadvalues) {
    return Promise.all(downloadvalues.map(resize))
}).then(function (resizevalues) {
    return Promise.all(resizevalues.map(upload));
}).then(function (uploadvalues) {
    console.log(uploadvalues)
})
.catch(function (error) {
    console.error(error);
})