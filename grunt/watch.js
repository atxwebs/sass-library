module.exports = {
    "sass_files": {
        "files": [
            "src/**/*.scss",
        ],
        "tasks": [
            "scsslint",
            "clean:release",
            "copy:release"
        ]
    }
};
