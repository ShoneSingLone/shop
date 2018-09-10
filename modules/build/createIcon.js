//graphMagick
const gm = require('gm');
const imageMagick = gm.subClass({
    imageMagick: true
});
console.dir(imageMagick);
/*let width = 100,
    height = 100;
var imgObj = imageMagick(path.join('../../public/img/icons/android-chrome-512x512.png')).resize(width, height).autoOrient().write('./a.png', (res) => {
    console.log(res)
});*/