' use strict';


//?__Вариант создания карточек 1
/*
export function drawGalleryItem(item) {
	const itemElement = document.createElement('div');
	itemElement.className = 'gallery__item';

	const srcWrapElement = document.createElement('div');
	srcWrapElement.className = 'gallery__item_src';

	if (item.type === 'image') {
		const imgElement = document.createElement('img');
		imgElement.className = 'gallery__item_foto';
		imgElement.src = item.src;

		srcWrapElement.appendChild(imgElement);

	} else if (item.type === 'audio') {
		const audioElement = document.createElement('audio');
		audioElement.className = 'gallery__item_audio';
		audioElement.src = item.src;
		audioElement.controls = true;

		srcWrapElement.appendChild(audioElement);
	} else if (item.type === 'video') {
		const videoElement = document.createElement('video');
		videoElement.className = 'gallery__item_video';
		videoElement.src = item.src;
		videoElement.controls = true;

		srcWrapElement.appendChild(videoElement);
	}

	const titleElement = document.createElement('span');
	titleElement.className = 'gallery__item_title';
	titleElement.textContent = item.title;

	

	itemElement.appendChild(srcWrapElement);
	itemElement.appendChild(titleElement);

	return itemElement;
}

*/

//?__Вариант создания карточек 2

const ITEM_TYPES = {
	image: drawImage,
	audio: drawAudio,
	video: drawVideo,
}

function drawImage(item) {
	const imageElement = document.createElement('img');
	imageElement.className = 'gallery__item_foto';
	imageElement.src = item.src;

	return imageElement;
}

function drawAudio(item) {
	const audioElement = document.createElement('audio');
	audioElement.className = 'gallery__item_audio';
	audioElement.src = item.src;
	audioElement.controls = true;

	return audioElement;
}

function drawVideo(item) {
	const videoElement = document.createElement('video');
	videoElement.className = 'gallery__item_video';
	videoElement.src = item.src;
	videoElement.controls = true;

	return videoElement;
}

export function drawGalleryItem(item) {
	const itemElement = document.createElement('div');
	itemElement.className = 'gallery__item';

	const srcWrapElement = document.createElement('div');
	srcWrapElement.className = 'gallery__item_src';

	const drawerForType = ITEM_TYPES[item.type];
	srcWrapElement.appendChild(drawerForType(item));

	const titleElement = document.createElement('span');
	titleElement.className = 'gallery__item_title';
	titleElement.textContent = item.title;

	itemElement.appendChild(srcWrapElement);
	itemElement.appendChild(titleElement);

	return itemElement;
}
