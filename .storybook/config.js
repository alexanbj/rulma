import { configure } from '@storybook/react';

// Import Bulma's CSS here so it gets picked up by webpack for the storybook
import 'bulma/css/bulma.css';

const req = require.context('../stories', true, /\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
