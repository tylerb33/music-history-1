console.log ("add.js");

var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");

addLink.addEventListener("click", function() {
  // homeView.classList.add("hidden");
  listView.classList.add("hidden");

  addView.classList.add("visible");
  addView.classList.remove("hidden");

});


let addMusicButton = document.getElementById("submit-button");
addMusicButton.addEventListener("click", function() {
	let song = document.getElementById("songName").value;
	let artist = document.getElementById("artistName").value;
	let album = document.getElementById("albumName").value;

	if (song === "") {
		alert("Please be sure to fill in all fields.")
	}else if (artist === "") {
			alert("Please be sure to fill in all fields.")
		}else if (album === "") {
				alert("Please be sure to fill in all fields.")			
		}else { convertToStringSent(song, artist, album)
				}

})

function convertToStringSent(song, artist, album) {
	let sentenceForArray = `${song} by ${artist} on the album ${album}`
	pushToArray(sentenceForArray);
}

function pushToArray(sentenceToPush) {
	songs.push(sentenceToPush);
	clearAllFields();
}

function clearAllFields() {
	document.getElementById("songName").value = "";
	document.getElementById("artistName").value = "";
	document.getElementById("albumName").value = "";
}
