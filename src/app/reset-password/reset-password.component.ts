import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public userName:string='';
public message:string=' You have successfully reset';


  constructor(private userService:UserService,private toastrSericve:ToastrService,private router:Router) 
   { }

  ngOnInit(): void {
    
  }

  onSubmit(reset:NgForm){
    console.log(reset.value);
    console.log(reset.valid);
    this.toastrSericve.info('',"You have Successfully reset password");

  }


  }


