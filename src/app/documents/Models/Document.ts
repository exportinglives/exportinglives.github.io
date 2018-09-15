export class Document {
  title: String;
  src: String;
  spinner: Boolean = true;

  /**
   * Document constructor
   * @param title Document Title
   * @param src File path
   */
  constructor(title: String, src: String) {
    this.title = title;
    this.src = src;
  }
}
