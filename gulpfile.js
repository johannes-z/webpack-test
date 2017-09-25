const gulp = require('gulp')
const ts = require('gulp-typescript')
const browserSync = require('browser-sync').create()

gulp.task('build', () => {
  return gulp.src('./src/**/*')
        .pipe(ts({
          noImplicitAny: false,
          module: 'es2015',
          allowJs: true,
          target: 'es5',
          lib: ['esnext', 'dom'],
          outDir: 'dist'
        }))
        .pipe(gulp.dest('./dist'))
})

gulp.task('watch', gulp.series('build', (done) => {
  browserSync.reload()
  done()
}))

// Static server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })

  gulp.watch('./src/**/*', gulp.parallel('watch'))
})
