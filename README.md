# react-webpack2-starter

Minimal React starter kit built with webpack 2, supporting all ES2017 and stage-0 features via babel and linting with ESLint. Hot Module Reloading is also provided when in development mode using the `next` branch of [react-hot-reloader][1].

## Usage

First of all, if you're using [Yarn][5] execute `yarn`, otherwise, `npm install`. 

### Development build

To run in development mode, run `npm run dev`, this will bundle and serve the app with dev-features enabled

### Production build

In production you can simply run `npm start` which builds the app with production settings and is served with [http-server][2]. If you wish to serve the bundle yourself you can run `npm run build` and serve the files located in `./dist/`.

### Linting

`npm run lint` will run [eslint][3] configured with the [airbnb config][4] and additional react presets.

## Extras

An [`.editorconfig`][6] file is provided for your favourite editor to use to provide auto-format functionality.
 
[1]: https://github.com/gaearon/react-hot-loader/tree/next/docs
[2]: https://github.com/indexzero/http-server
[3]: http://eslint.org/
[4]: https://www.npmjs.com/package/eslint-config-airbnb
[5]: https://yarnpkg.com/
[6]: http://editorconfig.org/