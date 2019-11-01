script=${0:A:h}/lyrics-buddy.js

lyrics() {
    track=$(grep "Track" <<< $(spotify status))
    track=${track:7} # Remove leading "Track: " text
    echo "Currently played song: $track. Lyrics lookup started..."

    node $script $track
}