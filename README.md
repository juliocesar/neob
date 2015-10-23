# Neob

Yet another Webpack build system.

# Features

* Webpack + hot-module-replacement ([babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform) + [react-transform-hmr](https://github.com/gaearon/react-transform-hmr)).
* [css-modules](https://github.com/css-modules/css-modules/) + [Sass](https://github.com/ddelbondio/ruby-sass-loader) + [PostCSS](https://github.com/postcss/postcss).
* Basic routing setup with react-router.
* [babeljs](https://babeljs.io/).
* Unit tests ([mocha](http://mochajs.org/) + [chai](http://chaijs.com/)) examples with both [shallow-rendering](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering) and [jsdom](https://github.com/tmpvar/jsdom).
* ESLint (with a slightly modified version of the [Feross Standard](https://github.com/feross/standard) as default). Just drop your own `.eslintrc` file on top of it if you don’t like it.
* **No Gulp/Grunt**. Automation is done by commands in `package.json`. More complex stuff done by shellscript in `bin`.

# Options

* To start the dev server:

    $ npm start

* Build to static files in `dist`:

    $ npm run build

Production configurations are used by appending `:production` to the commands above. So `$ npm run build:production` builds with production settings.

# Credits (y u no fork)

neob is *very* directly based off of [react-kickstart](https://github.com/vesparny/react-kickstart). I wasn’t sure initially how much it’d look like it, so I went with a copy first. And it only hasn’t diverged more than this because I’m not done with it yet.

Credit for all the initial effort should go to it, though.

# License

MIT.
