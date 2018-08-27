export class Petition {
  hashTag: String;
  text: String;
  url: URL;

  constructor(hashTag: String, text: String, url: URL) {
    this.hashTag = hashTag;
    this.text = text;
    this.url = url;
  }
}
