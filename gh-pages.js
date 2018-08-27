const ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'master',
  repo: 'https://github.com/exportinglives/exportinglives.github.io.git',
});
