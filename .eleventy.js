module.exports = function(config) {

    config.addPassthroughCopy("src/js");
    return  {
      dir: {
        input: "src",
        output: "_site",
        data: "_data"
      }
    };

};