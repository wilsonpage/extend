var config = module.exports;

config["fruitmachine"] = {
    rootPath: '../',
    environment: "browser",
    sources: [
        'build/extend.js'
    ],
    tests: [
        'test/*-test.js'
    ]
};
