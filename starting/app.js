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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'juhwan',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// person.role.push('admin') // tuple에서 push를 걸러내지는 못한다.
// person.role[1] = 10;
// person.role = [0, 'admin', 'user']
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // !! ERR  !!
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
