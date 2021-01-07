import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { SignUpData } from 'src/app/formspage/signup/signUpdata';
import { CheckserviceService } from 'src/app/services/status/checkservice.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {



  res = [];
  nullStatus:boolean = false;
  signupOld: Array<SignUpData>;

  
  constructor(private storage: LocalStorageService, private checkservice:CheckserviceService) { }

  ngOnInit(): void {
     let old = JSON.parse(this.storage.retrieve('UserDetails'));
    let count=0;
    for(let i in old){
      if(count<4){
      let temp = {};
      temp['name']=i;
      this.res.push(temp);
      }
      count++;
    }

    this.signupOld = JSON.parse(this.storage.retrieve('LocalUserData'));
    // console.log(this.signupOld);

    if(this.signupOld.length==0){
      this.nullStatus = false;
    }else{
      this.nullStatus = true;
    }
  }

  setLocalSignUp(){
      this.checkservice.setSignUpStatus(true);
    }
    removeLocalSigUp(){
      this.checkservice.setSignUpStatus(false);
    }

}
