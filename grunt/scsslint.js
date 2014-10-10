// Lint our SCSS
module.exports = {
    "allFiles": [
        "src/components/**/*.scss",
        "src/settings/**/*.scss",
        "src/tools/**/*.scss",
        "src/utilities/**/*.scss"
    ],
    "options": {
       "config": ".scss-lint.yml",
       "force": true
    }
};
