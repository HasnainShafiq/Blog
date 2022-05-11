const { DateTime } = require('luxon')
const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/admin");

    eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })
    
    return {
      dir: {
        input: "src",
        output: "public"
      }
    }
  };
