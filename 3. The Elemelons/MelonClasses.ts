abstract class Melon {
  public weight: number;
  public melonSort: string;
  constructor(weight: number, melonSort: string) {
    this.weight = weight;
    this.melonSort = melonSort;
  }
}

export class Watermelon extends Melon {
  public elementIndex: number;
  public el: string = "Water";

  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
    this.elementIndex = this.weight * this.melonSort.length;
  }

  get elIndex() {
    return this.elementIndex;
  }

  toString() {
    console.log(`Element: ${this.el}`);
    console.log(`Sort: ${this.melonSort}`);
    console.log(`Element Index: ${this.elIndex}`);
  }
}

export class Firemelon extends Watermelon {
  public el: string = "Fire";
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }
}
export class Airemelon extends Watermelon {
  public el: string = "Air";
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }
}
export class Earthmelon extends Watermelon {
  public el: string = "Earth";
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }
}

export class Melolemonmelon extends Watermelon {
  public elArr = ["Fire", "Earth", "Air", "Water"];
  public el: string = "";
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }

  morph(): void {
    const currentEl = this.elArr.shift();
    this.el = currentEl;
    this.elArr.push(currentEl);
  }
}
