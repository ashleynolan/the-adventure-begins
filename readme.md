![Kickoff](http://i.imgur.com/bfMlVwe.jpg)

> A lightweight front-end framework for creating scalable and performant, responsive sites

[![devDependency Status](https://david-dm.org/trykickoff/kickoff/dev-status.png)](https://david-dm.org/trykickoff/kickoff#info=devDependencies) [![Build status](https://ci.appveyor.com/api/projects/status/g699smb2tsoakc8k/branch/master?svg=true)](https://ci.appveyor.com/project/mrmartineau/kickoff/branch/master) [![Dependency Status](https://dependencyci.com/github/TryKickoff/kickoff/badge)](https://dependencyci.com/github/TryKickoff/kickoff) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![bitHound Overall Score](https://www.bithound.io/github/TryKickoff/kickoff/badges/score.svg)](https://www.bithound.io/github/TryKickoff/kickoff)

Developed and maintained by [Ashley Nolan](https://github.com/ashleynolan) & [Zander Martineau](https://github.com/mrmartineau)

## Features
|  | Feature | Description |
|---|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---|---|
| :fast_forward: | #webperf | Performance-first, responsive philosophy |
| :oncoming_bus: | Rock-solid build tasks | We use [gulp](http://gulpjs.com) to deliver the best task runner and developer experience for your project |
| :art: | CSS | `gulp css` - [Sass](http://sass-lang.com/) ([Libsass](http://sass-lang.com/libsass) via [node-sass](https://github.com/sass/node-sass)), [Postcss](http://postcss.org/) with [Autoprefixer](https://github.com/postcss/autoprefixer), [CSSNano](https://github.com/ben-eb/cssnano) and more, Source Maps |
| :elephant: | Javascript | `gulp javascript` - [Babel](http://babeljs.io/), [Webpack](http://webpack.github.io/) |
| :ferris_wheel: | Images | `gulp images` - Compression with [imagemin](https://www.npmjs.com/package/gulp-imagemin) |
| :fish:	 | Icons | `gulp icons` - Auto-generated [SVG Sprites](https://github.com/w0rm/gulp-svgstore) |
| :construction: | Compile | `gulp compile` - Compile all the things |
| :eyes: | Watch | `gulp watch` - Watch all the things |
| :fire: | Live updating | `gulp serve` - [Browsersync](http://www.browsersync.io/), [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware), [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware) |
| :shipit: | Production builds | `RELEASE=true gulp compile` - Set the `RELEASE` environment flag to true to compress everything. This works on individual tasks as well e.g. `RELEASE=true gulp javascript` |

---

## :memo: Demos and documentation
Kickoff's demo and documentation site is hosted at [trykickoff.com](http://trykickoff.com/).

---

## ![Kickoff Yeoman generator](http://i.imgur.com/rWftxao.png?1) Yeoman generator
Our Yeoman Generator is the best way to get Kickoff each time you want to start a new project, visit [trykickoff.com/docs/yeoman.html](http://trykickoff.com/learn/yeoman.html) for more info.

---

### ![Slack logo](http://i.imgur.com/1LNs3Q6.png?1) [Need real-time help? Find us on Slack](https://slackin-trykickoff.herokuapp.com/)

---

## :bug: Bugs and feature requests
Have a bug or a feature request? Please search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/TryKickoff/kickoff/issues/new).

---

## Browser compatibility
Kickoff has been tested in the following browsers:

| [Chrome](https://www.google.com/chrome/) (latest)                                                               | [Firefox](https://www.mozilla.org/en-GB/firefox/new/) (latest)                                                     | [Internet Explorer](https://en.wikipedia.org/wiki/Internet_Explorer_9) (9+)                                                       | [Safari](https://www.apple.com/safari/) (latest)                                                                | [Safari (iOS)](https://www.apple.com/safari/) (latest)                                                                 | [Opera](https://www.opera.com/) (latest)                                                                     |
|:---------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------:|------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------:|
| <img src="https://github.com/alrra/browser-logos/raw/master/chrome/chrome_256x256.png" width="80" alt="Chrome"> | <img src="https://github.com/alrra/browser-logos/raw/master/firefox/firefox_256x256.png" width="80" alt="Firefox"> | <img src="https://github.com/alrra/browser-logos/raw/master/internet-explorer/internet-explorer_256x256.png" width="80" alt="IE"> | <img src="https://github.com/alrra/browser-logos/raw/master/safari/safari_256x256.png" width="80" alt="Safari"> | <img src="https://github.com/alrra/browser-logos/raw/master/safari-ios/safari-ios_256x256.png" width="80" alt="Safari">| <img src="https://github.com/alrra/browser-logos/raw/master/opera/opera_256x256.png" width="80" alt="Opera"> |

---

## Maintainers and contributors
|                           Zander Martineau                          |                             Ashley Nolan                             |                              Nic Bell                             |
|:-------------------------------------------------------------------:|:--------------------------------------------------------------------:|:-----------------------------------------------------------------:|
| ![Zander](https://avatars0.githubusercontent.com/u/64883?v=3&s=100) | ![Ashley](https://avatars3.githubusercontent.com/u/805184?v=3&s=100) | ![Nic](https://avatars3.githubusercontent.com/u/151842?v=3&s=100) |
| [Twitter](http://twitter.com/mrmartineau)                           | [Twitter](http://twitter.com/AshNolan_)                              | [Twitter](http://twitter.com/nicbell)                                     |
| [Github](https://github.com/mrmartineau/)                           | [Github](https://github.com/ashleynolan)                             | [Github](https://github.com/nicbell/)                             |
| [Site](http://martineau.tv)                                         | [Site](http://ashleynolan.co.uk)                                     | [Site](http://nicbell.net)                                        |

### Community
If you're using Kickoff we'd love to hear about it; please e-mail us at trykickoff@gmail.com

Keep track of development and community news by following [@TryKickoff on Twitter](http://twitter.com/TryKickoff).

### Contributing
Please read our [contribution guidelines](https://github.com/TryKickoff/kickoff/wiki/Contributing-to-Kickoff) before contributing to Kickoff.

### Versioning
For transparency into our release cycle and in striving to maintain backward compatibility, Kickoff is maintained under [the Semantic Versioning guidelines](http://semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.

---

### Sponsored by
![TMW Unlimited...](http://i.imgur.com/KIUIgi8.png?1)

Kickoff was created by Ash and Zander while working at TMW. TMW continue to provide sponsorship for the development of the project as well as trykickoff.com domain renewals and stickers.
