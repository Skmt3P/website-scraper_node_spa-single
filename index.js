const scrape = require('website-scraper')

// any webpage you want to scrape
const url = 'https://www.oyolife.co.jp/'
const dir = url.replace('https://', '')
const options = {
    urls: [url],
    directory: `./src/${dir}`,
};

// Do scraping
scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});