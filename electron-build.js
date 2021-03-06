/*jshint esnext: true*/

const packager = require('electron-packager');
const config = require('./package.json');
const fse = require('fs-extra');

const obj = {
  dir: './',
  out: './electron-packager-dist',
  name: config.name,
  platform: 'all',
  arch: 'all',
  icon: './app-icon/icon',
  version: '0.36.7',

  'app-bundle-id': 'io.github.prince-0203',

  'app-version': config.version,
  'helper-bundle-id': 'io.github.prince-0203',
  overwrite: true,
  asar: true,
  prune: true,
  ignore: 'electron-build\\.js$|README\\.md$|\\.codeclimate\\.yml$|\\.csslintrc$|\\.eslintignore$|\\.eslintrc$|\\.gitignore$|\\.travis.yml$|logs($|/)|npm-debug.log$|\\.sublime-(.+)$|electron-packager-dist($|/)',
  'version-string': {
    CompanyName: config.author,
    FileDescription: config.name,
    FileVersion: config.version,
    ProductVersion: config.version,
    ProductName: config.name,
    InternalName: config.name
  }
};
packager(obj, function done(err, appPath) {
  if(err) {
    throw new Error(err);
  } else {
    console.log('Done.');
  }
});
