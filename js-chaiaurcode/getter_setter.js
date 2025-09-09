class user{
    constructor(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

    get email(){
        return `${this._email.toUpperCase()} :=is change into upper case `
    }
    set email(value){
        this._email=value
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
         this._password=value.toUpperCase();
    }
}


const newuser=new user("raja",'raj@.com','ds67y')
console.log(newuser.password);
console.log(newuser.email);



