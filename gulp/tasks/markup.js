const { src, dest } = require('gulp');
const htmlMin = require('gulp-htmlmin');
const { path } = require('../config/path');
const { plugins } = require('../config/plugins');
const { isProd } = require('../config/mode'); // eslint-disable-line no-unused-vars

exports.markup = function markup() {
  return src(path.src.markup)
    .pipe(plugins.replace(/@\//g, './'))
    .pipe(
      htmlMin({
        useShortDoctype: true,
        sortClassName: true,
        removeComments: isProd,

        /** Раскомментировать если требуется минификация html */
        collapseWhitespace: isProd,
      }),
    )
    .pipe(dest(path.build.markup))
    .pipe(plugins.browsersync.stream());
};
