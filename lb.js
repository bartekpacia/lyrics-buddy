const puppeteer = require("puppeteer");
const $ = require("cheerio");

const track = process.argv.slice(2);
console.log(track);

// const executablePath = "/Applications/Google Chrome.app";
const executablePath = puppeteer.executablePath();

async function run(url) {
  const browser = await puppeteer.launch({ executablePath, headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitFor(1000);

  await page.type("input[name=search-title]", track, { delay: 20 });
  await Promise.all([page.click("input.search-send"), page.waitForNavigation()]);

  console.log("1st navigation occurred");
  await Promise.all([
    page.click("div.content > div.box-przeboje > a.title"),
    page.waitForNavigation()
  ]);

  console.log("2nd navigation occurred");

  // textChildren = $("div.tekst > div.song-text", songHtml).children();

  // console.log(textChildren);
}

run("https://www.tekstowo.pl");

// process.exit(0);

// <input type="text" id="s-title" name="search-title" class="search-text" value="Podaj tytuł" autocomplete="off"></input>
// getHtml("https://www.tekstowo.pl/").then(html => {
//   console.log(html);
// });
