import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SocialLoginModule, AuthServiceConfig,  GoogleLoginProvider} from "angular-6-social-login";
import { ChatappComponent } from './chatapp/chatapp.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule, HttpHeaders}from '@angular/common/http';
const route: Routes = [{
  path: 'chatapp',
  component: ChatappComponent
},
{
  path: 'signin',
  component: SigninComponent
},
{
  path:"",
  component: SigninComponent
},
{
  path: '**',
  component: SigninComponent
}
]

export function getAuthServiceConfigs() {
let config = new AuthServiceConfig(
  [
    
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider("189377090443-2rn1dfjbq0t9vcfnt154jj322deq2eg1.apps.googleusercontent.com")
    },
  ]
);
return config;
}
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ChatappComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    HttpClientModule,
    RouterModule.forRoot(route),HttpClientModule,HttpHeaders
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
