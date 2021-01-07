import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { SignUpData } from 'src/app/formspage/signup/signUpdata';
import { CheckserviceService } from 'src/app/services/status/checkservice.service';
import { UserdataserviceService } from 'src/app/services/userdata/userdataservice.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  UsersList:any;
  userid:any;
  isLocal:boolean;
  name:string;
  password:string;
  isSignUp:boolean;
  loading:boolean = true;
  old: Array<SignUpData>;
  data: SignUpData;

  constructor(private activeRoute:ActivatedRoute, private serverdata:UserdataserviceService, private checkservice: CheckserviceService,
    private storage: LocalStorageService) { }

  ngOnInit(): void {
     this.activeRoute.params.subscribe(id =>{
       this.userid = id['id'];
      //  console.log(this.userid);
       this.checkservice.getLocalStatus().subscribe(status => {
         this.isLocal = status;
       })
       this.checkservice.getSignUpStatus().subscribe(status => {
         this.isSignUp = status;
       })
       if(this.isLocal){
         if(this.isSignUp){
          this.old = JSON.parse(this.storage.retrieve('LocalUserData'));
          for(let i=0;i<this.old.length;i++){
            if(this.old[i].email==this.userid){
              this.data = new SignUpData(this.old[i].email,this.old[i].password,this.old[i].country,this.old[i].gender,this.old[i].code);
            }
          }
         }else{
          var userObj = JSON.parse(this.storage.retrieve('UserDetails'));
          for(let i in userObj){
            if(this.userid==i){
              this.name=i;
              this.password=userObj[i];
            }
          }
         }
       }else{
         this.serverdata.getUserbyid(this.userid).subscribe(data =>{
         this.UsersList = data;
         this.loading=false;
       })
       }
     })

  }

}
