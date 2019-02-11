const gulp = require('gulp')
const concat = require('gup-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default', () => {
    return gup.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', function (err) { console.log(err) })
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
})