var screenshots = [
	"Screenshots/Playing Music.png",
	"Screenshots/Play Queue.png",
	"Screenshots/Playlist grid view.png",
	"Screenshots/playlist list view.png",
	"Screenshots/Playlist Open.png",
	"Screenshots/Customize Settings.png",
	"Screenshots/Music Library Settings.png",
	"Screenshots/About Settings.png"
],
screenshot_index = 0;
function update_screenshot() {
	const screenshot = document.getElementById("screenshot");
	screenshot.src = screenshots[screenshot_index];
}

function previous() {
	if(!screenshot_index) {
		return;
	}
	screenshot_index--
	update_screenshot()
}

function next() {
	screenshot_index = (screenshot_index + 1) % screenshots.length;
	update_screenshot()
}
