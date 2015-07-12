module.exports = function(grunt) {

    grunt.loadTasks('build/tasks');

    grunt.registerTask('test', [
        "karma:run"
    ]);

    grunt.registerTask('build', [
        "jade",
        "requirejs",
        "less",
        "copy"
    ]);

    grunt.registerTask('test', [
        "karma:run"
    ]);

    grunt.registerTask('default', ["build" ]);

    grunt.registerTask('release', [
        "build", "test"
    ]);

};

