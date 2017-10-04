function ClozeCard(text, cloze) {
	if (!text.match(cloze)) console.log("cloze not in text");

	this.cloze = cloze;
	this.partial = text.replace(cloze,"...");
	this.fullText = text;

}

module.exports = ClozeCard