console.log('***** Music Collection *****')

const collection = [];

// TODO: Add addToCollection function.
//  Inputs are title, artist, yearPublished, and array of track objects.
//  Track objects have {name, duration}.
//  Create object with inputs.
//  Push new object to collections.
//  Return object.

function addToCollection ( title, artist, yearPublished, tracks ) {
    return collection.push({title: title, artist: artist, yearPublished: yearPublished, tracks: tracks});
}

// TODO: Test addToCollection.
//  Add 6 albums. Have two with same artist,
//  two from same year

addToCollection("Pork Soda", "Primus", 1993, [
    {trackName: "Pork Chop's Little Ditty - Edit Version", duration: "0:21"},
    {trackName: "My Name is Mud", duration: "4:46"}
]);

addToCollection("Sailing the Seas of Cheese", "Primus", 1991, [
    {trackName: "Seas of Cheese", duration: "0:42"},
    {trackName: "Here Come the Bastards", duration: "2:53"}
]);

addToCollection("Unto the Locust", "Machine Head", 2011, [
    {trackName: "I Am Hell (Sonata in C#)", duration:"8:25"},
    {trackName: "Be Still And Know", duration: "5:43"}
]);

addToCollection("The Sound of Perserverance", "Death", 1998, [
    {trackName: "Scavenger of Human Sorrow", duration: "6:56"},
    {trackName: "Bite the Pain", duration: "4:29"}
]);

addToCollection("Futha", "Heilung", 2019, [
    {trackName: "Galgaldr", duration: "10:21"},
    {trackName: "Norupo", duration: "4:17"}
]);

addToCollection("Evergreen", "After the Burial", 2019, [
    {trackName: "Behold the Crown", duration: "4:34"},
    {trackName: "Exit, Exist", duration: "3:54"}
]);

console.log(collection);

// TODO: Create showCollection.
//  Give array parameter.
//  Log number of items.
//  Loop and log everything with:
//  {title} by {artist}, published in {year}.
//  Add another loop for every track with.
//  1. {name}: {duration}

function showCollection (collection) {
    console.log(`There are ${collection.length} albums in this collection.`);

    for (item of collection) {
        console.log(`${item.title} by ${item.artist}, published in ${item.yearPublished}`);
        for (let i = 0; i < item.tracks.length; i++) {
            console.log(`1. ${item.tracks[i].trackName}: ${item.tracks[i].duration}`);
        }
    }
}

// Test.
showCollection(collection);

// TODO: Add findByArtist.
//  Use name as parameter.
//  Loop through collection, and add to
//  result array.
//  return result.

function findByArtist(name) {
    return collection.filter(album => album.artist === name);
}

console.log("Expecting 1 album", findByArtist("Machine Head"));
console.log("Expecting 2 albums" ,findByArtist("Primus"));
console.log("Expecting no albums", findByArtist("Nonexistent Ned"));

// TODO: Create search function.
//  Parameter is an object
//  Has two parameter modes, it can be
//  artist, year.
//  or
//  trackName.
//  If object has trackName, search only by trackName.
//  return list of every match.

function search ( criteria ) {
    if ( criteria.trackName ) {         // Searching tracks.
        result = [];
        for (album of collection) {
            for (song of album.tracks) {
                if (song.trackName === criteria.trackName) {
                    result.push(song);
                }
            }
        }

        return result;
    } else {                            // Search everything else.
        return collection.filter(album => album.title === criteria.title && album.yearPublished === criteria.yearPublished);
    }
}

console.log("Expecting album", search({title: "Pork Soda", yearPublished: 1993}));
console.log("Expecting a track", search({trackName: "Norupo"}));
console.log("Expecting nothing", search({title: "The Sound of Perseverance", yearPublished: "3000 BC"}));
console.log("Expecting nothing", search({title: "Nonexistant Ned's Excellent Album", yearPublished: 1998}))
console.log("Expecting nothing", search({trackName: "Nonexistant Ned's Very Excellent Song"}));
