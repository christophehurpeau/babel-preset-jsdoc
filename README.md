# babel-preset-jsdoc [![NPM Version](http://img.shields.io/npm/v/babel-preset-jsdoc.svg?style=flat-square)](https://www.npmjs.org/package/babel-preset-jsdoc)

[![Greenkeeper badge](https://badges.greenkeeper.io/christophehurpeau/babel-preset-jsdoc.svg)](https://greenkeeper.io/)

Babel preset for latest jsdoc

* [Installation](#installation)
* [Usage](#usage)
* [Presets](#presets)

## Installation

```sh
npm install --save-dev babel-preset-jsdoc
```

## Usage

Add the following line to your `.babelrc` file:

```json
{
  "presets": ["jsdoc", "jsdoc/object-rest"]
}
```

### Presets

- jsdoc
- jsdoc/object-rest add if you need object-rest (stage 2) https://phabricator.babeljs.io/T7086

Note: to support `async` functions and other proposals, you can add babel preset `stage-1` or the stage you want.
