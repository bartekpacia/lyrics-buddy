# Lyrics buddy

Laziness ftw!

## Overview

I love listening to music and singing quietly underneath my nose, but googling
the lyrics for every single song started to be a cumbersome and repetitive task.

That's why I've created this simple terminal utility.

## Prerequisites

- MacOS
- zsh and [oh-my-zsh](https://ohmyz.sh/) installed
- `spotify` plugin for oh-my-zsh loaded

## Installing

- Download this repository and put it into your `$ZSH/custom/plugins` folder
- Run `npm install` in `ZSH/custom/plugins/lyrics-buddy`
- Add `lyrics-buddy` to plugins in your `.zshrc`

## Usage

1. Make sure you have Spotify app playing some cool beat
2. Type `lyrics` in your terminal, wait a few seconds and _voila_!

## How is it made?

It's basically a simple web scraper for [Tekstowo](https://www.tekstowo.pl)
a big Polish site containing lyrics of many songs.

When you type `source lyrics-buddy.sh`, headless Chromium browser is started,
and as we all know, Chrome isn't the most lightweight piece of software😉. That's why
it may take even 10 seconds to display the lyrics.

It isn't 100 or even 95% accurate, but that satisfies me anyway.

If you'd like to help, feel fre to provide feedback/support/PRs 👍
