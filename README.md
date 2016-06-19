# Neob

A React/Webpack/(S)CSS Modules/testing applications boilerplate.

## Features

* Webpack + hot-module-replacement ([babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform) + [react-transform-hmr](https://github.com/gaearon/react-transform-hmr)).
* Production optimisations settings/plugins for Webpack.
* Modular component organisation. Component folders in `src/components` carry code, styles and tests.
* [css-modules](https://github.com/css-modules/css-modules/) + [SCSS](https://github.com/jtangelder/sass-loader) + [PostCSS](https://github.com/postcss/postcss).
* **Themes** using colour scales. Single mixin for consolidating colour sourcing.
* **Sizing scales** (vertical rhythm and other goodies) done using [dirg](https://github.com/juliocesar/dirg).
* Basic routing setup with [react-router](https://github.com/reactjs/react-router).
* Tests using [Ava](https://github.com/avajs/ava/) and [Enzyme](http://airbnb.io/enzyme/).
* ESLint, with a slightly modified version of the [Feross Standard](https://github.com/feross/standard) as default, extended to include test files linting. Drop your own `.eslintrc.json` file on top of it if you don’t like it.
* **No Gulp or Grunt**. Automation is done by commands in `package.json`. More complex stuff done by scripts in `bin`.

## Usage

* Start the dev server:

```
$ npm start
```

* Build to static files in `build`:

```
$ npm run build
```

* Compile static application and deploy it to GitHub pages (update `bin/publish-gh-page` with your repository’s actual address):

```
$ ./bin/publish-gh-page
```

## Themes

Themes are SCSS hashes kept in `src/stylesheets/themes`. The [color mixin](https://github.com/juliocesar/neob/blob/master/src/stylesheets/color.scss) then sources them by key, and allows for 5 tint steps towards darker or lighter, allowing controlled variations for each entry.

By default, the build will look for a `default.scss` file. Alternative files can be loaded by passing an environment variable `THEME`:

```
$ THEME=green npm start
```

Or build to static files using a specific theme:

```
$ THEME=green npm run build
```
## Grid

Refer to [dirg](https://github.com/juliocesar/dirg)’s documentation, or [the longer post](https://medium.com/@julio_ody/sizing-supra-summa-3701cd075244#.dhlhjf6vy) on it.

You can override the default scale by supplying one in a separate file. Create (for example), a file `src/stylesheets/dirg-scale.scss` with:

```
$dirg-scales: (
  default: (
    font-size: 16px,
    unit: 21px,
    factor: 1.35
  )
);

```

Then source it right before dirg:

```
@import 'dirg-scale';
@import 'dirg';
…
```

# Credits (y u no fork)

neob is based off of [react-kickstart](https://github.com/vesparny/react-kickstart). I wasn’t sure initially how much it’d look like it, so I went with a copy first. It has now diverged sufficiently anyway to become more than just a build boilerplate, but introduce a few helpers for building applications.

# License

MIT.
