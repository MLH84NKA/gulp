const { src, dest, } = require("gulp");

// Configs
const path = require("../config/path.js");
const app = require("../config/app.js");


// Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const pugs = require("gulp-pug");
const webP = require("gulp-webp");
const webpHtml = require("gulp-webp-html");

// const del = require("del");
// import del from 'del';

// PUG
const pug = () => {
    return src(path.pug.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "PUG",
                message: error.message
            }))
        }
        ))
        .pipe(webP())
        .pipe(webpHtml())
        .pipe(pugs(app.pug))
        .pipe(dest(path.pug.dest))
}
module.exports = pug;