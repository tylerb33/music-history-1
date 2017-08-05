console.log ("list.js")

let contentArea = document.getElementById("song-list-container");
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
	contentArea.innerHTML += `<div class="specific-song-group">
										<ul>
											<li>${songs[i]}</li>
										</ul>
								</div>`;

}


var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");

listLink.addEventListener("click", function(event) {
  event.preventDefault();
  // homeView.classList.add("hidden");
  addView.classList.add("hidden");

  listView.classList.add("visible");
  listView.classList.remove("hidden");
});