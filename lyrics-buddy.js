const puppeteer = require("puppeteer");
const $ = require("cheerio");

const track = process.argv.slice(2);
console.log(track);

const executablePath = puppeteer.executablePath();

async function run(url) {
  const browser = await puppeteer.launch({ executablePath, headless: true });
  const page = await browser.newPage();
  await page.goto(url);

  await page.type("input[name=search-title]", track);
  await Promise.all([
    page.evaluate(selector => document.querySelector("input.search-send").click()),
    page.waitForNavigation({ waitUntil: "networkidle2" })
  ]);
  console.log("1/3 search results ready");

  await Promise.all([
    page.evaluate(selector =>
      document.querySelector("div.content > div.box-przeboje > a.title").click()
    ),
    page.waitForNavigation({ waitUntil: "networkidle0" })
  ]);
  console.log("2/3 song page loaded");

  songHtml = await page.content();

  let contents = $("div.tekst > div.song-text", songHtml).text();
  contents = contents.replace("Poznaj historię zmian tego tekstu", "");

  console.log(contents);
  console.log("3/3 song text printed");
}

run("https://www.tekstowo.pl");

// process.exit(0);

// <input type="text" id="s-title" name="search-title" class="search-text" value="Podaj tytuł" autocomplete="off"></input>
// getHtml("https://www.tekstowo.pl/").then(html => {
//   console.log(html);
// });
