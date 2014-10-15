module.exports = {
    "run_sass_files": {
        "files": [
            "src/**/*.{scss,sass}",
            "!src/vendor/"
        ],
        "tasks": [
            "scsslint"
        ]
    }
};
