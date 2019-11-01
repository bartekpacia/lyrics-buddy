## Overview

I love listening to music and singing quietly underneath my nose, but googling
the lyrics for every single song started to be a cumbersome and repetitive task.

That's why I created this simple terminal utility.

## Prerequisites

- MacOS
- `zsh` and `oh-my-zsh` installed
- `spotify` plugin for `oh-my-zsh` loaded

## How is it made?

It's basically a simple web scraper for [Tekstowo](https://www.tekstowo.pl)
a big Polish site containing lyrics of many songs.

When u type `source lyrics-buddy.sh`, headless Chromium browser is started,
and your search is entered just like you'd do it (using keyboard). That's why
it may take even 10 seconds to display the lyrics.

## Usage

- Export `lyrics-buddy.sh` globally to your shell
- Make sure you have Spotify app playing some cool beat

`source lyrics-buddy.sh` in your terminal

Now wait 5-10 seconds, and song text should appear

It isn't 100 or even 95% accurate, but that satisfies me anyway.

If you'd like to help, feel fre to provide feedback/support/PRs 👍
