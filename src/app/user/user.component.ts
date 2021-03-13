import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../user.service';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  

  user: SocialUser;
  loggedIn: boolean;

  
public userName:string='';
public message:string='';

  constructor(private authService: SocialAuthService,private userService:UserService,private toastrSericve:ToastrService,private router:Router) { }
 



  
  ngOnInit(): void {
    this.userName=this.userService.getUserName();
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  
  }

  signInWithGoogle(): any{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): any {
    this.authService.signOut();
  }

  onSignUp(userForm){
    console.log(userForm.value);
    this.userService.addUser(userForm.value.name,userForm.value.email,userForm.value.p1)
 .subscribe(data=>{
   this.message=data['message'].toString();
   this.toastrSericve.info('',this.message);


 });
  }
 


  
  userSignin(userLogin){
    let email=userLogin.value.t11;
    let pass =userLogin.value.p11;
  this.userService.loginUser(email,pass)
  .subscribe(data=>{
    console.log(data);
    if(data['message']=='Success'){
    this.toastrSericve.info('Login Successfull !');
    this.router.navigate(['/videos']);
  // store the token in local storage
  this.userService.addToken(data['token']);
  //store the username at localStorage
    this.userService.addUserName(data['user_name']);
    this.userName=data['user_name'];
    }
    else
    this.toastrSericve.error(data['message']);
    
  });

}
 


logout(){
  this.userService.logoutUser();
  this.toastrSericve.info('You have Successfully logged out !');
  this.userName='';
  this.router.navigate(['/users']);
}


}
