// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'juhwan',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'auathor']
// };

// const ADMIN = 0;
// const READ_ONY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR,
}
// 기본적으로 0,1,2로 시작되지만 특정 string이나 number로 지정할 수 있다.

const person = {
  name: 'juhwan',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

// person.role.push('admin') // tuple에서 push를 걸러내지는 못한다.
// person.role[1] = 10;

// person.role = [0, 'admin', 'user']

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) // !! ERR  !!
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
}
