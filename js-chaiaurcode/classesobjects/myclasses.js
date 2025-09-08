class user {
    constructor(username,email,password) {
        this.username=username
        this.email=email
        this.password=password
    }
    encrypt(){
        return `a1${this.password}239986pceg`
    }
}
const chai=new user("rohit","as@12.com",'2398')
console.log(chai);
