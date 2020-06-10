module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    'gh-pages': {
      options: {
        // Options for all targets go here.
      },
      'gh-pages': {
        options: {
          base: 'build'
        },
        // These files will get pushed to the `gh-pages` branch (the default).
        src: ['index.html']
      }
    }
  });
};