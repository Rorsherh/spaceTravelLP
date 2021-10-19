const { src, dest, watch, parallel, series } = require('gulp');
const browserSync  = require('browser-sync').create();
const scss        = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


function browsersync() {
    browserSync.init ({
        server: {
            baseDir: "src"
        }
    });

    watch("src/*.html").on('change', browserSync.reload);
}

function styles() {
    return src("src/scss/**/*.+(scss|sass)")
        .pipe(scss().on('error', scss.logError))
        .pipe(autoprefixer())
        .pipe(dest("src/css"))
        .pipe(browserSync.stream());
}

function watching() {
    watch("src/scss/**/*.+(scss|sass)", parallel('styles'));
}


exports.browsersync = browsersync;
exports.styles = styles;
exports.watching = watching;

exports.default = parallel(styles, browsersync, watching);