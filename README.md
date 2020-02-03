### ⚠️ Project discontinued

I created this solely for my personal use case and it does its job. However, there's much more mature and advanced project I've got to know about recently. It's called [SwagLyrics](https://github.com/SwagLyrics/SwagLyrics-For-Spotify) and it does everything what lyrics-buddy does and more. What's more, it's available for operating systems!

_I highly encourage you to use SwagLyrics instead of lyrics-buddy._

# Lyrics buddy

Laziness ftw!
![demo](https://i.imgur.com/ANug1oE.gif)

## Overview

I love listening to music and singing quietly underneath my nose, but googling
the lyrics for every single song started to be a cumbersome and repetitive task.

That's why I've created this simple terminal utility.

## Prerequisites

- MacOS
- [NodeJS](https://nodejs.org/en/) installed
- zsh and [oh-my-zsh](https://ohmyz.sh/) installed
- `spotify` plugin for oh-my-zsh loaded

## Installing

- Download this repository and put it into your `$ZSH/custom/plugins` folder
- Run `npm install` in `$ZSH/custom/plugins/lyrics-buddy`
- Add `lyrics-buddy` to plugins in your `~/.zshrc`

## Usage

1. Make sure you have Spotify app playing some cool beat
2. Type `lyrics` in your terminal, select your song and _voila_!

## How is it made?

It's basically a simple web scraper for [Tekstowo](https://www.tekstowo.pl),
a big Polish site containing lyrics of many songs. (Of course, the fact that
the site is Polish doesn't matter at all, all the lyrics are in their original language)

When you type `lyrics`, it uses spotify plugin for oh-my-zsh and
performs a search on Tekstowo.

If you'd like to help, feel fre to provide feedback/support/PRs 👍
