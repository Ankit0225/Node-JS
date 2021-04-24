console.log('After 3 seconds');

function someasynctask (callback) {
    setTimeout(function() {
          callback();
    },3000)
}
someasynctask(function () {
    console.log('We did some work');
})
