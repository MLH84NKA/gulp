const del = require("del");
// import del from 'del';
// Configs
const path  = require("../config/path.js");
// Clear
const clear = () => {
    return del(path.root);
}


module.exports = clear;