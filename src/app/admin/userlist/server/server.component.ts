import { Component, OnInit } from '@angular/core';
import { UserdataserviceService } from 'src/app/services/userdata/userdataservice.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  UsersList: Array<any>;
  constructor(private userService:UserdataserviceService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(status => {
      this.UsersList = status;
    })
  }

}
