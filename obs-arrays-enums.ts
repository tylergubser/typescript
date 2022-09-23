enum Role { ADMIN, READ_ONLY = 15, AUTHOR  }
const person
//     name: string;
//     age: number;
//     nickname: string;

 = {
    name: "Tyler",
    age: 35,
    nickname: "TyGuy",
    hobbies: ['sports', 'animals'],
    role: Role.ADMIN
};

const animal = {
    name: "Boujie",
    species: "Cat",
    weight: 7,
    age: 6,

}
console.log(person.nickname)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

