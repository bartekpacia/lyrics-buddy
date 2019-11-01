#!/bin/zsh

# Get title of the currently playing Spotify track
lyrics() {
    track=$(grep "Track" <<< $(spotify status))
    track=${track:7} # Remove leading "Track: " text
    echo "Currently played song: $track. Lyrics lookup started..."

    node lyrics-buddy.js $track
}