export default function () {}

let message: string = 'Hello world';
let value: number = 1;

let nullableString: string | null = null;
nullableString = 'Hi';

let undefinedOrNumber: undefined | number;
undefinedOrNumber = 10;

let numberOrStringOrNull: number | string | null = null;
numberOrStringOrNull = 1;
numberOrStringOrNull = 'Bye';
numberOrStringOrNull = null;

let isCompleted: boolean = true;
isCompleted = false;

let anyValue: any = null;
anyValue = undefined;
anyValue = 1;
anyValue = 'hello world';

function process(a: number, b: number, isDouble?: boolean) {
  const sum = a + b;
  return isDouble ? sum * 2 : sum;
}

const total = process(1, 2);
const doubledTotal = process(1, 2, true);

function hello(value: string, returnNull?: boolean) {
  if (returnNull) {
    return null;
  }
  return `Hello ${value}`;
}

const result = hello('world');
const nullResult = hello('wolrd', true);

// result 값이 null 일 수 있기 때문에 옵셔널 체이닝 연산자 사용
const replaced = result?.replace('Hello', 'Bye');

// interface : 객체나 클래스를 위한 타입을 정할때 사용
interface Profile {
  id: number;
  username: string;
  displayName: string;
  photoURL?: string;
}

// 다른 interface참조
interface Relationship {
  from: Profile;
  to: Profile;
}

// 다른 interface 상속
interface Account extends Profile {
  email: string;
  password: string;
}

function printUsername(profile: Profile) {
  console.log(profile.username);
}

const profile: Profile = {
  id: 1,
  username: 'velopert',
  displayName: 'Minjun kim',
};

const relationship: Relationship = {
  from: {
    id: 1,
    username: 'velopert',
    displayName: 'minjunkim',
  },
  to: {
    id: 2,
    username: 'jo',
    displayName: 'hihi',
  },
};

const account: Account = {
  id: 1,
  username: 'jooo',
  displayName: 'hiiii',
  email: 'djdj@adjf.caf',
  password: '123123',
};

// 클래스에서 interface를 implement
interface Shape {
  getArea(): number;
  getPerimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  getArea(): number {
    return this.width * this.height;
  }
  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const circle = new Circle(4);
const rectangle = new Rectangle(4, 6);

const area = circle.getArea();
const perimeter = rectangle.getPerimeter();

// 배열타입
const numbers: number[] = [1, 2, 3, 4, 5];
const texts: string[] = ['hello', 'world'];

interface Person {
  name: string;
}

const people: Person[] = [{name: 'John Doe'}, {name: 'Jane Doe'}];

// Type Alias : 타입에 별칭을 붙여주는 기능 => 객체의 타입 지정 및 다른타입에 별칭을 지어 줄 수도 잇음
// 객체의 타입은 interface로도 선언할 수 있고 type으로도 선언 가능
// 일관성있게 사용하는것이 중요
type Person2 = {
  name: string;
};

// 필드 추가할때는 & 사용
type Employee = Person & {
  job: string;
};

const employee: Employee = {
  name: 'John Doe',
  job: 'Programmer',
};

// Generic : 함수, 객체, 클래스 타입에서 사전에 정하지 않은 다양한 타입을 다룰 때 사용
// 함수
function wrap(value: any) {
  return {value};
}

const result2 = wrap('Hello world');
// Generic사용하지 않으면 any 사용해야함 => result 타입 추론 불가

function wrap2<T>(value: T) {
  return {value};
}
const result3 = wrap2('Hello world');

interface Person3 {
  name: string;
}
const person3: Person3 = {name: 'John Doe'};
const result4 = wrap2(person3);

// 객체
interface Item<T> {
  id: number;
  data: T;
}

interface Person4 {
  name: string;
}

interface Place {
  location: string;
}

const personItem: Item<Person4> = {
  id: 1,
  data: {
    name: 'John Doe',
  },
};

const placeItem: Item<Place> = {
  id: 2,
  data: {
    location: 'Korea',
  },
};

// 클래스
class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
const first = queue.dequeue();
const second = queue.dequeue();
