module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-newer');

    // on watch events configure jshint:all to only run on changed file
    grunt.event.on('watch', function(action, filepath) {
        grunt.config('scsslint.all.src', filepath);
    });

    return {
        "sass_files": {
            "files": [
                "src/**/*.scss",
            ],
            "tasks": [
                "scsslint",
                "newer:copy:release"
            ],
            "options": {
                "spawn": false,
            }
        }
    };
};
