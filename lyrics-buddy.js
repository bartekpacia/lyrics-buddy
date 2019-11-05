const puppeteer = require("puppeteer");
const readline = require("readline-sync");
const $ = require("cheerio");

const track = process.argv[2];
const artist = process.argv[3];

const executablePath = puppeteer.executablePath();

async function run(url) {
  const browser = await puppeteer.launch({ executablePath, headless: true });
  const page = await browser.newPage();
  await page.goto(url);
  const html = await page.content();

  let songs = [];
  $("div.content > div.box-przeboje > a.title", html)
    .contents()
    .map((index, element) => {
      songs.push({ index: index + 1, title: element.data });
    });

  // Crop less probable matches
  songs = songs.slice(0, 9);

  console.log(`${songs.length} sound songs, a few first are displayed:`);
  songs.forEach(song => console.log(`${song.index} -> ${song.title}`));
  let songIndex = readline.questionInt("Enter the index of the song you want to display: ");
  songIndex = songIndex - 1; // Compensate that songs start from 1 (looks better to user)
  console.log(`-> ${songs[songIndex].title}`);

  await Promise.all([
    page.evaluate(index => {
      const titles = document.querySelectorAll("div.content > div.box-przeboje > a.title");
      titles[index].click();
    }, songIndex),
    page.waitForNavigation({ waitUntil: "networkidle2" })
  ]);

  songHtml = await page.content();

  let contents = $("div.tekst > div.song-text", songHtml).text();
  contents = contents.replace("Poznaj historię zmian tego tekstu", "");

  console.log(contents);
  console.log(`Direct url to lyrics: ${page.url()}`);

  process.exit(0);
}

run(`https://www.tekstowo.pl/szukaj,wykonawca,${artist},tytul,${track}.html`);
