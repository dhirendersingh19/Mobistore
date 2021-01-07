import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { CheckserviceService } from 'src/app/services/status/checkservice.service';
import { SignUpData } from '../signup/signUpdata';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string ="";
  password:string ="";
  message:string = "";


  localUserDetails: Array<SignUpData>;

  constructor(private router:Router, private storage: LocalStorageService,private checkservice:CheckserviceService) { }

  ngOnInit(): void {
    
  }


    login(): void{
    var userObj = JSON.parse(this.storage.retrieve('UserDetails'));
    var adminArray = JSON.parse(this.storage.retrieve('AdminList'));
    if(this.storage.retrieve('UserDetails') && this.storage.retrieve('AdminList')){
        if(userObj[this.username.toLowerCase()]){
          if(userObj[this.username.toLowerCase()]==this.password.toLowerCase()){
            this.checkservice.setCurrentUser(this.username);
            // console.log(this.password);
            this.checkservice.setLoggedInStatus(true);
            if(adminArray.indexOf(this.username.toLowerCase())>-1){
              this.checkservice.setAdminStatus(true);
              // console.log(this.username);
              this.router.navigateByUrl('inventory');
            }else{
              this.checkservice.setAdminStatus(false);
              this.router.navigateByUrl('products');
            }
          }else{
                this.message = "Invalid Password";
            }
        }else{
            this.message = "Invalid Username";
        }
    }
    else{


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


    if(userObj[this.username.toLowerCase()]){
          if(userObj[this.username.toLowerCase()]==this.password.toLowerCase()){
            this.checkservice.setCurrentUser(this.username);
            // console.log(this.password);
            this.checkservice.setLoggedInStatus(true);
            if(adminArray.indexOf(this.username.toLowerCase())>-1){
              this.checkservice.setAdminStatus(true);
              // console.log(this.username);
              this.router.navigateByUrl('inventory');
            }else{
              this.checkservice.setAdminStatus(false);
              this.router.navigateByUrl('products');
            }
          }else{
                this.message = "Invalid Password";
            }
        }else{
            this.message = "Invalid Username";
        }
    }
  }

}
