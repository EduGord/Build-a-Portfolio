module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          sizes: [{
            width: 240,
            suffix: '-sm',
            quality: 10,
          },{
            width: 320,
            suffix: '-md',
            quality: 20,
          },{
            width: 373,
            suffix: '-lg',
            quality: 100,
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
