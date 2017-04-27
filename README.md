# Rulma

[![build status](https://img.shields.io/travis/alexanbj/rulma/master.svg?style=flat-square)](https://travis-ci.org/alexanbj/rulma)

> React components for [Bulma](https://github.com/jgthms/bulma).

#### Disclaimer
Rulma is in the early stages, with active development, so it could be subject to breaking changes.

## Getting started
#### Install
```bash
npm install --save rulma
```

#### Include Bulma CSS
Include either Bulma's CSS (or your modified version if you've changed the Bulma variables).

If you are using webpack with CSS loader:

Install Bulma:
```bash
npm install --save bulma
```
and import Bulma's CSS somewhere in your application:
```js
import 'bulma/css/bulma.css';
```

If not using webpack, you can simply include it in directly in the html `<head>` section from some CDN of your choosing:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.1/css/bulma.css">
```

#### Font Awesome
You probably want icons, so while you're at it, drop some [Font Awesome](http://fontawesome.io/) in there as well:
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
```
