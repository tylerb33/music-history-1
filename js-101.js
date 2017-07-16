console.log ("it works");
let wordsToRemove = ["*", "@", "!", "("]
let contentArea = getElementById
let songs = [];

songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs.push("Another Brick in the Wall > by Pink Floyd on the album The Wall");
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs.unshift("Legs > by Z*ZTop on the album Eliminator");



for (let i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace('*', '');
	songs[i] = songs[i].replace('!', '');
	songs[i] = songs[i].replace('(', '');
	songs[i] = songs[i].replace('@', '');
	songs[i] = songs[i].replace('>', '-');


}

console.log(songs);




















// Original array

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";



