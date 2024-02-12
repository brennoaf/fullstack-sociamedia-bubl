import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfterLoginContentComponent } from '../organize/components/after-login-content/after-login-content.component';
import { MainFeedComponent } from '../organize/components/after-login-content/main-feed/main-feed.component';
import { LeftNavBarComponent } from '../organize/components/after-login-content/left-nav-bar/left-nav-bar.component';
import { RightNavBarComponent } from '../organize/components/after-login-content/right-nav-bar/right-nav-bar.component';
import { PostItemsComponent } from '../organize/components/after-login-content/main-feed/post-items/post-items.component';

@NgModule({
  declarations: [
    AppComponent,
    AfterLoginContentComponent,
    MainFeedComponent,
    LeftNavBarComponent,
    RightNavBarComponent,
    PostItemsComponent
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
