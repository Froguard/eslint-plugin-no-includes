# eslint-plugin-no-includes

Disallow using the method includes

[![version](https://img.shields.io/npm/v/eslint-plugin-no-inculdes.svg "version")](https://www.npmjs.com/package/eslint-plugin-no-inculdes)&nbsp;
[![Build Status](https://img.shields.io/travis/Froguard/eslint-plugin-no-inculdes.svg)](https://travis-ci.org/Froguard/eslint-plugin-no-inculdes)&nbsp;
[![GitHub issues](https://img.shields.io/github/issues/Froguard/eslint-plugin-no-inculdes.svg)](https://github.com/Froguard/eslint-plugin-no-inculdes/issues?q=is%3Aopen+is%3Aissue)&nbsp;
[![license](https://img.shields.io/github/license/froguard/eslint-plugin-no-inculdes.svg)](https://github.com/froguard/eslint-plugin-no-inculdes/blob/master/LICENSE)


## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-includes`:

```
$ npm install eslint-plugin-no-includes --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-includes` globally.

## Usage

Add `no-includes` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-includes"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-includes/no-includes": ["error", {"ignore": ["_", "lodash", "underscore"]}],
    }
}
```

> Created by yeoman tool.



