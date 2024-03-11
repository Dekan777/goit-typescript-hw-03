// Ключ (Key): Створіть клас Key. У нього має бути одна приватна
// властивість signature, яка генерується випадково при створенні
// об'єкта цього класу (наприклад Math.random()). Також цей клас
// повинен мати метод getSignature, який повертає значення властивості
//  signature.
class Kay {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);

export {};
