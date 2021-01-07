import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignUpData } from 'src/app/formspage/signup/signUpdata';

@Injectable({
  providedIn: 'root'
})
export class UserdataserviceService {

  data: SignUpData;
  constructor(private http:HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }

  getUserbyid(id:any):Observable<any>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users/'+id);
  }

  addUser(data:SignUpData){
    this.http.post('https://jsonplaceholder.typicode.com/users/',data).subscribe(status =>{
      // console.log(status);
      // console.log(typeof status);
      alert('Data Posted');
      // this.data = status;
    })
  }

}
