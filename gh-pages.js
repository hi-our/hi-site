var ghpages = require('gh-pages');

ghpages.publish('build', {
  branch: 'master',
  repo: 'https://github.com/hi-our/hi-our.github.io.git'
}, function (error) {
  console.log('error :>> ', error);
});