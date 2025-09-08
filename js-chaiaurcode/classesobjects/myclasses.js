// class user {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encrypt() {
//         return `a1${this.password}239986pceg`
//     }
//     addprefix() {
//         return `Mr/Mrs ${this.username.toUpperCase()} `
//     }
// }
// const chai = new user("rohit", "as@12.com", '2398')
// console.log(chai);
// console.log(chai.encrypt());
// console.log(chai.addprefix());


// behind the seen

function user(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encrypt = function () {
    return `a1${this.password}239986pceg`
}
user.prototype.addprefix = function () {
     return `Mr/Mrs ${this.username.toUpperCase()} `
}



const data = new user("rohit", "as@12.com", '2398')
console.log(data);
console.log(data.encrypt());
console.log(data.addprefix());