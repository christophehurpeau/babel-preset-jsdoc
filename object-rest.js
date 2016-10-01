// https://phabricator.babeljs.io/T7086
module.exports = {
  plugins: [
    [require('babel-plugin-transform-es2015-destructuring'), { loose: true }],
    require('babel-plugin-transform-es2015-parameters'),
  ],
};
