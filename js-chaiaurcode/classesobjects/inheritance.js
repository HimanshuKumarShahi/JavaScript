class student{
    constructor(studentname,email){
        this.studentname=studentname
        this.email=email
    }
    studentdetail(){
        console.log(`The student name is: ${this.studentname} and email_Id : ${this.email}`);
        
    }
}
class teacher extends student{
    constructor(studentname,email,password){
        super(studentname)
       this.email=email
        this.password=password
    }
    coursedetail(){
        console.log(`The course is added by ${this.studentname}`);
        
    }
    passwncrypt(){
        return `ausskhh${this.password}78svk0-=hbv`
    }
}
const student1=new teacher("rajesh","rajesh@12.com",'92rj')
console.log(student1);
// console.log(student1.studentdetail());
// console.log(student1.coursedetail());
// console.log(student1.passwncrypt());

const student2=new student("raju","raj@12.com")

student2.studentdetail();

console.log(teacher===student);
console.log(student2 instanceof student);
console.log(student1 instanceof teacher);
