let request = require('request'),
    cheerio = require('cheerio');

module.exports = (req, res) => {
	let scrapedArticles = [];
    // First, we grab the body of the html with request
    request("http://m.mlb.com/news/", function(error, response, html) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(html);
    // Now, we grab every h2 within an article tag, and do the following:
    //$("li.article.rail-ad-mini").each(function(i, element) {
    $(".bam-article").each(function(i, element) {
      // Save an empty result object
      var result = {};

      // Add the text and href of every link, and save them as properties of the result object
      // result.title = $(this).children("a").text().trim();
      // result.link = $(this).children("a").attr("href");
      result.title = $(this).attr('data-title');
      result.link = 'http://m.mlb.com' + $(this).attr("data-url");
      result.blurb = $(this).children("section").children('.blurb').text().trim().split('\n');

      scrapedArticles.push(result);

    });
    console.log('--------- SCRAPED --------', scrapedArticles);
    res.send(scrapedArticles);
  });
}