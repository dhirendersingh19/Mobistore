import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { UserdataserviceService } from 'src/app/services/userdata/userdataservice.service';
import { validatorCode } from './codeValidator';
import { SignUpData } from './signUpdata';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  old: Array<SignUpData>;

  localUserDetails: Array<SignUpData>;

  constructor(private fb: FormBuilder, private storage: LocalStorageService, private userDataService: UserdataserviceService, private router:Router) { }

  ngOnInit(): void {
  }

  postForm(){
    let data: SignUpData;
    this.old = new Array<SignUpData>();
    let flag=0;
    var userObj = JSON.parse(this.storage.retrieve('UserDetails'));
    data = new SignUpData(this.checkForm.get('emailId').value,this.checkForm.get('passWord').value,this.checkForm.get('country').value,
    this.checkForm.get('gender').value,this.checkForm.get('code').value);
    if(this.storage.retrieve('UserDetails') && this.storage.retrieve('LocalUserData')){
        this.old = JSON.parse(this.storage.retrieve('LocalUserData'));
        if(this.old==null){
          userObj[data.email]=data.password;
          this.storage.store('UserDetails', JSON.stringify(userObj));
          this.old.push(data);
          this.storage.store('LocalUserData',JSON.stringify(this.old));
          alert('Data Added Successfully');
          this.userDataService.addUser(data);
        }else{
          for(let i=0;i<this.old.length;i++){
            if(data.email==this.old[i].email){
              alert('Register with seprate Email ID, Data Already Exists');
              flag=1;
              break;
            }
          }
          if(flag==0){
          userObj[data.email]=data.password;
          this.storage.store('UserDetails', JSON.stringify(userObj));
          this.old.push(data);
          this.storage.store('LocalUserData',JSON.stringify(this.old));
          alert('Data Added Successfully, Directing to Login page.');
          this.userDataService.addUser(data);
          this.router.navigateByUrl('login');
          }
        }
    }else{

      let userDetails = {
      "admin":"admin",
      "rohit": "demo",
      "mohit": "india",
      "raj": "book"
    }

    const adminList = ["admin"];

    this.localUserDetails = new Array<SignUpData>();
    this.storage.store('UserDetails', JSON.stringify(userDetails));
    this.storage.store('AdminList', JSON.stringify(adminList));
    this.storage.store('LocalUserData', JSON.stringify(this.localUserDetails));


    this.userDataService.addUser(data);
        this.old = JSON.parse(this.storage.retrieve('LocalUserData'));
        if(this.old==null){
          userObj[data.email]=data.password;
          this.storage.store('UserDetails', JSON.stringify(userObj));
          this.old.push(data);
          this.storage.store('LocalUserData',JSON.stringify(this.old));
          alert('Data Added Successfully');
        }else{
          for(let i=0;i<this.old.length;i++){
            if(data.email==this.old[i].email){
              alert('Register with seprate Email ID, Data Already Exists');
              flag=1;
              break;
            }
          }
          if(flag==0){
          userObj[data.email]=data.password;
          this.storage.store('UserDetails', JSON.stringify(userObj));
          this.old.push(data);
          this.storage.store('LocalUserData',JSON.stringify(this.old));
          alert('Data Added Successfully, Directing to Login page.');
          this.router.navigateByUrl('login');
          }
        }

    }
  }

    checkForm = this.fb.group({
    emailId: ['',[Validators.required, Validators.email]],
    passWord: ['',[Validators.required,Validators.minLength(6)]],
    country: ['',[Validators.required,Validators.pattern("[A-Za-z]+")]],
    code: ['',[Validators.required,validatorCode()]],
    gender: ['Male']
  })


  get emailId(){
    return this.checkForm.get('emailId');
  }
  get passWord(){
    return this.checkForm.get('passWord');
  }
 
  get country(){
    return this.checkForm.get('country');
  }

    get code(){
    return this.checkForm.get('code');
  }
}
