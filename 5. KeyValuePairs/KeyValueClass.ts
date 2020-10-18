class KeyValuePair<T, U> {
  private key: T;
  private value: U;

  public setKeyValue(key: T, value: U) {
    this.key = key;
    this.value = value;
  }

  public display() {
    console.log(`key = ${this.myKeys}, value = ${this.myValue}`);
  }

  get myKeys() {
    return this.key;
  }

  get myValue() {
    return this.value;
  }
}

export default KeyValuePair
