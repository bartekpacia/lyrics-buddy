#!/bin/zsh

# Get title of the currently playing Spotify track 
track=$(grep "Track" <<< $(spotify status))
track=${track:7} # Remove leading "Track: " text
echo $track

node lb.js $track