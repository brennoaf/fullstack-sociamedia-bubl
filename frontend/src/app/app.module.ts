import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalFeedComponent } from '../organize/components/global-feed/global-feed.component';
import { MainFeedComponent } from '../organize/components/global-feed/main-feed/main-feed.component';
import { LeftNavBarComponent } from '../organize/components/global-feed/left-nav-bar/left-nav-bar.component';
import { RightNavBarComponent } from '../organize/components/global-feed/right-nav-bar/right-nav-bar.component';
import { PostItemsComponent } from '../organize/components/global-feed/main-feed/post-items/post-items.component';
import { LoginPageComponent } from '../organize/components/login-page/login-page.component';
import { RegisterPageComponent } from '../organize/components/register-page/register-page.component';
import { RegisterFirstStepComponent } from '../organize/components/register-page/register-first-step/register-first-step.component';
import { RegisterNextStepEmailComponent } from '../organize/components/register-page/register-next-step-email/register-next-step-email.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalFeedComponent,
    MainFeedComponent,
    LeftNavBarComponent,
    RightNavBarComponent,
    PostItemsComponent,
    LoginPageComponent,
    RegisterPageComponent,
    RegisterFirstStepComponent,
    RegisterNextStepEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
