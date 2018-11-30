const Raspistill = require('node-raspistill').Raspistill;
const camera = new Raspistill();

camera.takePhoto()
  .then((photo) => {
    console.log('took photo', photo);
  })
  .catch((error) => {
        console.error('something bad happened', error);
  });
