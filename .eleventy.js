const { DateTime } = require('luxon')
const yaml = require("js-yaml");
const Image = require('@11ty/eleventy-img');

(async () => {
  const url = '';

  const stats = await Image(url, {
    formats: ['jpeg', 'webp'],
    widths: [400, 800, 1280],
    dryRun: true,
  });
  console.log(stats);
})();

const imageShortcode = async (
  src,
  alt,
  className = undefined,
  widths = [400, 800, 1280],
  formats = ['jpeg', 'webp'],
  sizes = '100vw'
) => {
  const imageMetadata = await Image(src, {
    widths: [null, ...widths],
    formats: [null, ...formats],
    outputDir: 'src/assets/img',
    urlPath: 'public/assets/img',
  });
};

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/admin");

    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

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
