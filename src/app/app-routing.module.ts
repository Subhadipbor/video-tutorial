import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

import{ VideoDetailsComponent} from'./video-details/video-details.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {path:'videos',component:VideoDetailsComponent},
  {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'users',component:UserComponent},
  {path:'reset-password',component:ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
