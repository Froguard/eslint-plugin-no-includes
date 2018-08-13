# eslint-plugin-no-includes

Disallow using the method includes

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



