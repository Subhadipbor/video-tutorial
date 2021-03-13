import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private _url:string='https://futuristic-reinvented-flood.glitch.me';

  addUser(name:string,email:string,password:string){
 return this.http.post(`${this._url}/api/users/signup`,{'name':name,'email':email,'password':password});
  }
  loginUser(email:string,password:string){
    return this.http.post(`${this._url}/api/users/signin`,{'email':email,'password':password}); 
  }
  addToken(token){
    localStorage.setItem("token",token);
    console.log('token added');
  }
  getToken(){
    let token=localStorage.getItem("token");
    return token;
  }
  addUserName(user){
    localStorage.setItem("USER",user);
    console.log('user added');

  }
  getUserName(){
  let username=localStorage.getItem("USER");
  return username;
  }
  logoutUser(){
    localStorage.clear();
    console.log("localStorage is cleared")
  }
}
