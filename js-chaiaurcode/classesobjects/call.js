function setusername(username){
    this.username=username
    console.log("called");
    
}

function createuser(username,email,password){

    setusername.call(this,username)

   this.email=email
   this.password=password
}
const user= new createuser("hk","as@12fb.com","123")
console.log(user);
