console.log('***** Music Collection *****')

const collection = [];


function addToCollection ( title, artist, yearPublished, tracks ) {
    return collection.push({title: title, artist: artist, yearPublished: yearPublished, tracks: tracks});
}


//  Testing addToCollection
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

// Displaying collection to check if everything worked.
console.log(collection);


function showCollection (collection) {
    console.log(`There are ${collection.length} albums in this collection.`);

    for (item of collection) {                              // Show albums
        console.log(`${item.title} by ${item.artist}, published in ${item.yearPublished}`);
        for (let i = 0; i < item.tracks.length; i++) {      // Show tracks in albums
            console.log(`1. ${item.tracks[i].trackName}: ${item.tracks[i].duration}`);
        }
    }
}

console.log("Testing showCollection");

// Test.
showCollection(collection);


function findByArtist(name) {
    // Filters collection to return shallow copy array of items matching artist.
    return collection.filter(album => album.artist === name);
}


// Testing findByArtist
console.log("Expecting 1 album", findByArtist("Machine Head"));
console.log("Expecting 2 albums" ,findByArtist("Primus"));
console.log("Expecting no albums", findByArtist("Nonexistent Ned"));



console.log("Testing search");

function search ( criteria ) {

    let result = [];

    if ( criteria.trackName ) {         // Searching tracks only.
        for (album of collection) {     // Looking through individual albums.
            result = result.concat(album.tracks.filter(song => song.trackName === criteria.trackName));
        }

        return result;
    } else {                            // Search everything else.
        result = result.concat(collection);     // Copy full list to get filtered down.
                                                // This will also make the function return the entire
                                                // collection if there are no properties to search,
                                                // and will also allow a search of just one category.
        if (criteria.title) {           // Filter titles if there is a title property.
            result = result.filter(album => album.title === criteria.title);
        }
        if (criteria.artist) {          // Filter artists if there is an artist property.
            result = result.filter(album => album.artist === criteria.artist);
        }
        if (criteria.yearPublished) {   // Filter years if there is a yearPublished property.
            result = result.filter(album => album.yearPublished === criteria.yearPublished);
        }
        return result;
    }
}


// Testing search
console.log("Expecting album by searching a title and year", search({title: "Pork Soda", yearPublished: 1993}));
console.log("Expecting a track by searching just a track", search({trackName: "Norupo"}));
console.log("Expecting nothing searching a true title and false yearPublished", search({title: "The Sound of Perseverance", yearPublished: "3000 BC"}));
console.log("Expecting nothing searching a false title and true year", search({title: "Nonexistent Ned's Excellent Album", yearPublished: 1998}))
console.log("Expecting nothing searching a false track", search({trackName: "Nonexistent Ned's Very Excellent Song"}));
console.log("Expecting everything with an empty criteria", search({}));
console.log("Expect 2 albums by searching just a year", search({yearPublished: 2019}));
console.log("Expect 2 albums by searching just an artist", search({artist: "Primus"}));
