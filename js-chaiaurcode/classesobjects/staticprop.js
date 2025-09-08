
class user{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    logme(){
        console.log(`username:${this.username}," ", email: ${this.email} ," ", password:${this.password}`);
    }
     static addid(){
        let id=Math.floor(Math.random()*1000 +1)
        return `${this.username}${id}`
    }
}
const data=new user("rjau","rjaa@123","kk589");
console.log(data);
console.log(data.logme());
// console.log(data.addid());

class teacher extends user{
    constructor(username,email){
        super(username);
        this.email=email
    }
}
const teacher1=new teacher("rakesh","rakesh@68.com")
teacher1.logme();