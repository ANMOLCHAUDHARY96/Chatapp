import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider} from 'angular-6-social-login';
import {Router}from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private socialAuthService: AuthService, private router:Router) { }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      // elseif((socialPlatform == "twitter"){}
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        // Now sign-in with userData
        // ...
        this.router.navigate(['/signin']);

      }
    );
  }
 
  public token()
  {
    
  }





  ngOnInit() {
  }

}
