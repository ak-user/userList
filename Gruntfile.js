module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            files: 'less/**/*.less',
            tasks: ['less']
        },
        less: {
            dev: {
                files: {
                    'style.css': 'less/style.less'
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // define default task
    grunt.registerTask('default', ['less', 'watch']);
};
