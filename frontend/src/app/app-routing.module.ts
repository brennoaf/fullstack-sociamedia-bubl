import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalFeedComponent } from '../organize/components/global-feed/global-feed.component';
import { LoginPageComponent } from '../organize/components/login-page/login-page.component';
import { RegisterPageComponent } from '../organize/components/register-page/register-page.component';

const routes: Routes = [
  {path: '', component: GlobalFeedComponent},
  {path: 'auth/login', component: LoginPageComponent},
  {path: 'auth/register', component: RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
