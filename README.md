# babel-plugin-auto-css-modules [![NPM][npm-img]][npm-url] [![Coverage][cov-img]][cov-url]

Automatically import same name CSS modules.

## Table of Contents

*   [Installation](#installation)
*   [Documentation](#documentation)
*   [Code of Conduct](#code-of-conduct)
*   [Contributing](#contributing)
*   [License](#license)

## Installation

**npm**

```bash
npm install babel-plugin-auto-css-modules
```

**yarn**

```bash
yarn add babel-plugin-auto-css-modules
```


## Documentation

For any Javascript modules that you want corresponding CSS simply create a CSS file with the extension `.css` and the same name as your Javascript module in the same directory as your Javascript module. For example if you have a component at `foo/bar/Baz.js` your corresponding CSS would live at `foo/bar/Baz.css`.

Then in your Babel configuration include:
```js
const plugins = []

// Omit CSS modules in the test environment as Jest doesn't know how to handle
// them and they provide no value to Jest tests anyways.
if (NODE_ENV !== 'test') {
  plugins.push('babel-plugin-auto-css-modules')
}

module.exports = {
  plugins,
}
```

This plugin will then automatically inject import statements into your Javascript modules to reference the CSS modules. Given the above example `foo/bar/Baz.js` would get `import "foo/bar/Baz.css"` at the top of the file.

From here you'll need to configure your bundler of choice to handle CSS modules. If you're using Webpack I recommend [postcss-loader](https://github.com/postcss/postcss-loader).

## Code of Conduct

Please see the [code of conduct](CODE_OF_CONDUCT.md).

## Contributing

Please see the [contributing guide](CONTRIBUTING.md).

## License

[MIT](LICENSE.md)

[cov-img]: https://img.shields.io/codecov/c/github/dogma-io/babel-plugin-auto-css-modules.svg "Code Coverage"
[cov-url]: https://codecov.io/gh/dogma-io/babel-plugin-auto-css-modules

[npm-img]: https://img.shields.io/npm/v/babel-plugin-auto-css-modules.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/babel-plugin-auto-css-modules
