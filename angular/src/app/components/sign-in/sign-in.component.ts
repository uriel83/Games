import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  inputEmail: string = "";
  inputPassword: string = "";
  show: boolean = false;
  serverError: boolean = false;
  loader: boolean = false;

  constructor(private router: Router, private usersService: UsersServiceService) { }

  ngOnInit(): void {localStorage.clear();
  }
  signInClick(email: string, password: string) {
    this.loader=true
    this.usersService.UserLogin(email, password).subscribe(()=>{
        this.router.navigate(['/home'])
      })
      this.loader=false
      this.serverError = true;
  }

  passwordHide() {
    this.show = !this.show; 
  }

}
