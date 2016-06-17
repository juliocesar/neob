# Neob

Yet another React/Webpack/(S)CSS Modules/Testing boilerplate.

# Features

* Webpack + hot-module-replacement ([babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform) + [react-transform-hmr](https://github.com/gaearon/react-transform-hmr)).
* [css-modules](https://github.com/css-modules/css-modules/) + [SCSS](https://github.com/jtangelder/sass-loader) + [PostCSS](https://github.com/postcss/postcss).
* **Themes** using colour scales.
* **Sizing scales** (vertical rhythm and other goodies) done using [dirg](https://github.com/juliocesar/dirg).
* Basic routing setup with react-router.
* [babeljs](https://babeljs.io/).
* Unit tests ([Ava](https://github.com/avajs/ava/) + [Enzyme](http://airbnb.io/enzyme/)) examples with both.
* ESLint (with a slightly modified version of the [Feross Standard](https://github.com/feross/standard) as default). Just drop your own `.eslintrc.json` file on top of it if you don’t like it.
* **No Gulp/Grunt**. Automation is done by commands in `package.json`. More complex stuff done by scripts in `bin`.

# Options

* Start the dev server:

```
$ npm start
```

* Start the dev server with an alternative theme:

```
$ THEME=green npm start
```

* Build to static files in `build`:

```
$ npm run build
```

* Compile static application and deploy it to GitHub pages (update `bin/publish-gh-page` with your repository’s actual address):

```
$ ./bin/publish-gh-page
```

# Credits (y u no fork)

neob is *very* directly based off of [react-kickstart](https://github.com/vesparny/react-kickstart). I wasn’t sure initially how much it’d look like it, so I went with a copy first. And it only hasn’t diverged more than this because I’m not done with it yet.

Credit for all the initial effort should go to it, though.

# License

MIT.
