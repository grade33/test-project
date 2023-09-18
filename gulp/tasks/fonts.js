const { dest, src } = require('gulp');
const fs = require('fs');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');
const del = require('del');
const { path } = require('../config/path');

exports.otfToTtf = function otfToTtf() {
  // Ищем файлы шрифтов .otf
  return (
    src(`${path.srcFolder}/assets/fonts/*.otf`, {})
      // Конвертируем в .ttf
      .pipe(
        fonter({
          formats: ['ttf'],
        }),
      )
      // Выгружаем в исходную папку
      .pipe(dest(`${path.srcFolder}/assets/fonts/`))
  );
};

exports.ttfToWoff = function ttfToWoff() {
  // Ищем файлы шрифтов .ttf
  return (
    src(`${path.srcFolder}/assets/fonts/*.ttf`, {})
      // Конвертируем в .woff
      .pipe(
        fonter({
          formats: ['woff'],
        }),
      )
      // Выгружаем в папку с исходниками
      .pipe(dest(`${path.srcFolder}/assets/fonts/`))
      // Ищем файлы .ttf
      .pipe(src(`${path.srcFolder}/assets/fonts/*.ttf`))
      // Конвертируем в .woff2
      .pipe(ttf2woff2())
      .pipe(dest(`${path.srcFolder}/assets/fonts/`))
  );
};

exports.fontDrag = function fontDrag() {
  // Ищем файлы .woff и .woff2 и выгружаем в папку с исходниками
  del([
    `${path.srcFolder}/assets/fonts/*.*`,
    `!${path.srcFolder}/assets/fonts/*.woff`,
    `!${path.srcFolder}/assets/fonts/*.woff2`,
  ]);
  return src(`${path.srcFolder}/assets/fonts/*.woff`, {})
    .pipe(dest(path.build.fonts))
    .pipe(src(`${path.srcFolder}/assets/fonts/*.woff2`))
    .pipe(dest(path.build.fonts));
};

exports.fontStyle = function fontStyle() {
  function cb() {}

  // Файл стилей подключения шрифтов
  const fontsFile = `${path.srcFolder}/styles/base/_typography.scss`;
  // Проверяем существуют ли файлы шрифтов
  fs.readdir(path.build.fonts, (err, fontsFiles) => {
    if (fontsFiles) {
      // Проверяем существует ли файл стилей для подключения шрифтов
      if (!fs.existsSync(fontsFile)) {
        fs.writeFile(fontsFile, '', cb);
        let newFileOnly;
        for (let i = 0; i < fontsFiles.length; i+=1) {
          // Записываем подключения шрифтов в файл стилей
          const fontFileName = fontsFiles[i].split('.')[0];
          if (newFileOnly !== fontFileName) {
            const fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
            let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
            let fontTypeFace = fontFileName.split('-')[2] ? fontFileName.split('-')[2] : fontFileName;

            if (fontWeight.toLowerCase() === 'thin' || +fontWeight === 100) {
              fontWeight = 100;
            } else if (fontWeight.toLowerCase() === 'extralight' || +fontWeight === 200) {
              fontWeight = 200;
            } else if (fontWeight.toLowerCase() === 'light' || +fontWeight === 300) {
              fontWeight = 300;
            } else if (fontWeight.toLowerCase() === 'medium' || +fontWeight === 500) {
              fontWeight = 500;
            } else if (fontWeight.toLowerCase() === 'semibold' || +fontWeight === 600) {
              fontWeight = 600;
            } else if (fontWeight.toLowerCase() === 'bold' || +fontWeight === 700) {
              fontWeight = 700;
            } else if (
              fontWeight.toLowerCase() === 'extrabold' ||
              fontWeight.toLowerCase() === 'heavy' ||
              +fontWeight === 800
            ) {
              fontWeight = 800;
            } else if (fontWeight.toLowerCase() === 'black' || +fontWeight === 900) {
              fontWeight = 900;
            } else {
              fontWeight = 400;
            }

            if (fontTypeFace.toLowerCase() === 'italic') {
              fontTypeFace = fontTypeFace.toLowerCase();
            } else {
              fontTypeFace = 'normal';
            }
            fs.appendFile(
              fontsFile,
              `@font-face {\n\tfont-weight: ${fontWeight};\n\tfont-family: ${fontName};\n\tfont-style: ${fontTypeFace};\n\tsrc: url('@/assets/fonts/${fontFileName}.woff2') format('woff2'), url('@/assets/fonts/${fontFileName}.woff') format('woff');\n\tfont-display: swap;\n}\r\n\n`,
              cb,
            );
            newFileOnly = fontFileName;
          }
        }
      } else {
        // Если файл есть, выводим сообщение
        console.log('Файл _typography.scss уже существует. Для обновления файла нужно его удалить.');
      }
    }
  });

  return src(`${path.srcFolder}`);
};
