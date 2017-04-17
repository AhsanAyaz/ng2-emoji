var gulp = require('gulp');

var buffer = require('vinyl-buffer');
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');
var spritesmith = require('gulp.spritesmith');

RegExp.escape = (text)=> {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

gulp.task('sprite', () => {
  var spriteData = gulp.src('images/emoticons/*.png').pipe(spritesmith({
    imgName: 'ng2-emoji.png',
    cssName: 'ng2-emoji.css',
    imgPath:'../img/ng2-emoji.png',     //according to ng2-webpack practices
        // Prefix all sprite names with `sprite-` (e.g. `home` -> `sprite-home`)
    cssVarMap: (sprite) => {
        sprite.name = sprite.name.replace(/[-[\]{}()*+?.,\\/^$|#\s]/g,'\\$&');
    }
  }));
  // Pipe image stream through image optimizer and onto disk
  var imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img/'));

  // Pipe CSS stream through CSS optimizer and onto disk
  var cssStream = spriteData.css
    .pipe(csso())
    .pipe(gulp.dest('dist/css/'));

  // Return a merged stream to handle both `end` events
  return merge(imgStream, cssStream);
});
