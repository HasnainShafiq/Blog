const { DateTime } = require("luxon");
const yaml = require("js-yaml");
const Image = require("@11ty/eleventy-img");

//other packages
const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/admin");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // It’s important that UpgradeHelper is the LAST addPlugin() call.
  eleventyConfig.addPlugin(UpgradeHelper);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
