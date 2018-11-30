const Raspistill = require('node-raspistill').Raspistill;
const camera = new Raspistill({
  encoding: 'png'
});

var count = 0;
setInterval(function() {
  camera.takePhoto('photo_' + count++)
    .then((photo) => {
      console.log('took photo', photo);
    })
    .catch((error) => {
      console.error('something bad happened', error);
    });
}, 15000);
