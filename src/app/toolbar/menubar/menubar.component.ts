import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckserviceService } from 'src/app/services/status/checkservice.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  isAdmin:boolean;
  isLoggedIn:boolean;
  isCurrentUserName:string;
  constructor(private checkservice:CheckserviceService, private router:Router) { }

  ngOnInit(): void {

    this.checkservice.getAdminStatus().subscribe(status => {
      this.isAdmin = status;
    })
    this.checkservice.getLoggedInStatus().subscribe(status => {
      this.isLoggedIn = status;
    })
    this.checkservice.getCurrentUser().subscribe(status => {
      this.isCurrentUserName = status;
    })
  }
  logout(){
      this.checkservice.resetcart();
      this.checkservice.allreset();
      this.router.navigateByUrl('login');
      // alert('All Reset.');
  }

  checkGuest(){
    if(this.isCurrentUserName=='guest'){
      return false;
    }else{
      return true;
    }
  }

  setLocal(){
    this.checkservice.setLoalStatus(true);
    this.checkservice.setSignUpStatus(false);
  }
  removeLocal(){
    this.checkservice.setLoalStatus(false);
    this.checkservice.setSignUpStatus(false);
  }
    
}
