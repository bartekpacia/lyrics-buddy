script=${0:A:h}/lyrics-buddy.js

lyrics() {
    spotify_status=$(spotify status)
    track=$(grep "Track" <<< $spotify_status)
    artist=$(grep "Artist" <<< $spotify_status)
    track=${track:7} # Remove leading "Track: " text
    artist=${artist:14} # Remove some weirs chars and leading "Artist: " text
    echo "$track by $artist. Lyrics lookup started..."

    node $script $track $artist
}