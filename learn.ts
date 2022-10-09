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
