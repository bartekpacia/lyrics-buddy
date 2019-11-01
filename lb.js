const puppeteer = require("puppeteer");
const $ = require("cheerio");

const track = process.argv.slice(2);
console.log(track);

// const executablePath = "/Applications/Google Chrome.app";
const executablePath = puppeteer.executablePath();

const host = "www.google.com";
const port = 8080;

async function run(url) {
  // const browser = await puppeteer.connect({ executablePath, browserURL: `http://${host}:${port}` });
  const browser = await puppeteer.launch({ executablePath, headless: false });
  const page = await browser.newPage();
  await page.goto(url);

  await page.type("input[name=search-title]", track);
  await Promise.all([
    page.evaluate(selector => document.querySelector("input.search-send").click()),
    page.waitForNavigation({ waitUntil: "networkidle2" })
  ]);
  console.log("1st navigation occurred");

  await Promise.all([
    page.evaluate(selector =>
      document.querySelector("div.content > div.box-przeboje > a.title").click()
    ),
    page.waitForNavigation({ waitUntil: "networkidle0" })
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
