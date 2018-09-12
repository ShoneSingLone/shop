let fs = require('fs-extra');
let path = require('path');
let from = path.join(__dirname, './../../dist/');
let to = path.join(__dirname, '../../../APIServer/public/shop');
let to2 = path.join(__dirname, '../../../ShoneSingLone.github.io/shop');

// Sync:
if (process.env.NODE_ENV === 'production' || !process.env.NODE_ENV) {
    console.log('__dirname:', __dirname, '\nfrom:', from, '\nto:', to)
    fs.remove(to)
        .then((re) => {
            console.log('removed! 1', re)
            return fs.copy(from, to);
        })
        .then(() => {
            console.log('copied! 1', to)
            return fs.remove(to2);
        })
        .then((re) => {
            console.log('removed! 2', re)
            return fs.copy(from, to2)
        })
        .then(() => {
            console.log('copied! 2', to2)
        })
        .catch(err => {
            console.error(err)
        })
}