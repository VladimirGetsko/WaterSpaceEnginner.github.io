const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const newer = require('gulp-newer');


// Обработка Instructions
const instructions = () => {
    return src(path.instructions.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "Instructions",
            message: error.message
        }))
    }))
    .pipe(newer(path.instructions.dest))
    .pipe(dest(path.instructions.dest));
};

module.exports = instructions;