# Rulma

React components for [Bulma](https://github.com/jgthms/bulma)

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
<link ref="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.2/css/bulma.css" />
```
