# eslint-plugin-ttag

This plugin helps you to use ttag tags and functions properly

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ttag`:

```
$ npm install eslint-plugin-ttag --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-ttag` globally.

## Usage

Add `ttag` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ttag"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "ttag/no-module-declaration": 2,
        "ttag/no-start-and-trailing-spaces-in-translations": 2
    }
}
```

## Supported Rules

* [ttag/no-module-declaration](docs/rules/no-module-declaration.md): Warn about ttag tags and functions declaration on a module scope.
* [ttag/no-start-and-trailing-spaces-in-translations](docs/rules/no-start-and-trailing-spaces-in-translations.md): Warn about ttag tags and functions declaration on a module scope.
