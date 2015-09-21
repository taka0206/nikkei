var config = module.exports;

config["node tests"] = {
  env : "node",
  sources: [
    "js/fizzbuzz-node.js"
  ],
  tests : [
    "test/*-node-test.js"
  ]
};

config["browser tests"] = {
  env : "browser",
  sources: [
        "js/fizzbuzz-browser.js"
      ],
  tests : [
    "test/*-browser-test.js",
  ]
};
