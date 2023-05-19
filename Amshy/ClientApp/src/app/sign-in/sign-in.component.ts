import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  username: string = '';
  password: string = '';
  wasValidated: boolean = false;

  constructor(private router: Router, private globalService: GlobalService) { }

  handleSignInClicked = (): void => {
    try {
      if (this.username.length > 0 && this.password.length > 0) {
        this.globalService.global.isSignedIn = true;
        this.router.navigate(['/chart']);
      }
    } catch (e) {

    }

    this.wasValidated = true;
  }

  handleUsernameKeyUp = (event: any) => {
    this.username = event.target.value;
  }

  handlePasswordKeyUp = (event: any) => {
    this.password = event.target.value;
  }
}
