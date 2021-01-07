export class SignUpData{
    email: string;
    password:string;
    country:string;
    gender:string;
    code:string;
    constructor(email:string,password:string,country:string,gender:string,code:string){
        this.email=email;
        this.password=password;
        this.country=country;
        this.gender=gender;
        this.code=code;
    }
}