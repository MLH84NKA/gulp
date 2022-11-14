const { src, dest, } = require("gulp");

// Configs
const path = require("../config/path.js");
const app = require("../config/app.js");


// Plugins

const imageMin = require("gulp-imagemin");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const newer = require("gulp-newer");
const webp = require("gulp-webp");
const gulpif = require("gulp-if");





// IMG
const img = () => {
    return src(path.img.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "IMG",
                message: error.message
            }))
        }
        ))
        .pipe(newer(path.img.dest))
        .pipe(webp())
        .pipe(dest(path.img.dest))
        .pipe(src(path.img.src))
        .pipe(newer(path.img.dest))
        .pipe(gulpif(app.isProd, imageMin(app.imageMin)))
        .pipe(dest(path.img.dest))
}

module.exports = img;