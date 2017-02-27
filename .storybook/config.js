import { configure } from '@kadira/storybook';

const req = require.context('../stories', true, /\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
