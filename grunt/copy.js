module.exports = function(grunt) {
    return {
        "build": {
            "files": [
                {
                    "expand": true,
                    "cwd": "src/vendor/bower_components/foundation/scss",
                    "src": "**",
                    "dest": "src/vendor/foundation"
                },
                {
                    "expand": true,
                    "cwd": "src/vendor/bower_components/normalize-scss",
                    "src": "_normalize.scss",
                    "dest": "src/vendor/normalize"
                }
            ]
        },
        "release": {
            "files": [
                {
                    "expand": true,
                    "cwd": "src",
                    "src": ['**/*',  '!**/vendor/bower_components/**'],
                    "dest": "dist"
                }
            ]
        }
    };
};
