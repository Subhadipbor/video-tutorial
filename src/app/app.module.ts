import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ VideoService} from './video.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import {HttpClientModule} from '@angular/common/http';
//Loading FormsModule
import{FormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { SafePipe } from './safe.pipe';
import { UserComponent } from './user/user.component';
import{UserService} from './user.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SocialLoginModule, GoogleLoginProvider } from 'angularx-social-login';
import { SocialAuthServiceConfig} from 'angularx-social-login';





@NgModule({
  declarations: [
    AppComponent,
    VideoDetailsComponent,
    SafePipe,
    UserComponent,
    ResetPasswordComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     BrowserAnimationsModule,
     SocialLoginModule,
    
     
     
    /*setting global configuration for toastr*/ 
   ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar:true,
      progressAnimation:'increasing'
    })

  ],
  providers: [VideoService,UserService,{
    provide:'SocialAuthServiceConfig',
    useValue:{
      autoLogin:false,
      providers:[
        {
          id:GoogleLoginProvider.PROVIDER_ID,
          provider:new GoogleLoginProvider('403934452732-d8vj9r8195kpdqna14dn2nlsdp4in0l6.apps.googleusercontent.com')
      
        }

      ]
    } as SocialAuthServiceConfig,
  } 
  
  ],
  bootstrap: [AppComponent], 
  
})
export class AppModule { }
