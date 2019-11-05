const puppeteer = require("puppeteer");
const $ = require("cheerio");

const track = process.argv[2];
const artist = process.argv[3];

const executablePath = puppeteer.executablePath();

async function run(url) {
  const browser = await puppeteer.launch({ executablePath, headless: true });
  const page = await browser.newPage();
  await page.goto(url);

  console.log(`1/3 search results ready. ${page.url()}`);

  const html = await page.content();

  let songs = [];
  const titles = $("div.content > div.box-przeboje > a.title", html)
    .contents()
    .map((index, element) => songs.push({ index, data: element.data }));

  for (let song of songs) {
    console.log(song);
  }

  await Promise.all([
    page.evaluate(selector =>
      document.querySelector("div.content > div.box-przeboje > a.title").click()
    ),
    page.waitForNavigation({ waitUntil: "networkidle2" })
  ]);
  console.log("2/3 song page loaded");

  songHtml = await page.content();

  let contents = $("div.tekst > div.song-text", songHtml).text();
  contents = contents.replace("Poznaj historię zmian tego tekstu", "");

  console.log(contents);
  console.log(`3/3 song text printed. ${page.url()}`);

  process.exit(0);
}

run(`https://www.tekstowo.pl/szukaj,wykonawca,${artist},tytul,${track}.html`);
