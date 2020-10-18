export class Boxes<T> {
  private _boxes = [];

  public add(el: T) {
    this._boxes.push(el);
  }

  public remove() {
    this._boxes.pop();
  }

  get count() {
    return this._boxes.length;
  }
}
