' use script';

export default class Gallery{
	constructor(title, img) {
		this.title = title;
		this.img = img;
	}

	toString() {
		return JSON.stringify({
			title: this.title,
			img: this.img
		});
	}
	getUpperCaseTitle() {
		return this.title.toUpperCase();
	}
}


