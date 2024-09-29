const user = {
    name: 'Sasha',
    age: 16,
    height: 165,
    place: 'Makariv'
}

for (let key in user) {
    console.log(key, ':', user[key]);
}
JSON.stringify(console.log(user));
JSON.parse('1');
let user2 = Object.assign(user);
user2 = { 
    weight: 56,
    member: 'none',
    country: 'ukraine'
}
console.log(user);
console.log(user2);