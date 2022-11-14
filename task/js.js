const { src, dest, } = require("gulp");

// Configs
const path = require("../config/path.js");
const app = require("../config/app.js");


// Plugins

const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const webpackStream = require("webpack-stream");




// JS
const js = () => {
    return src(path.js.src, { sourcemaps: true})
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "JS",
                message: error.message
            }))
        }
        )) 
        .pipe(babel())
        .pipe(webpackStream(app.webpack))
        .pipe(dest(path.js.dest, { sourcemaps: true}))
}

module.exports = js;