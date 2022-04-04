import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServiceService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user = {
    fName: "",
    lName: "",
    email: "",
    password: ""
  };

  passwordShow: boolean = false;
  confirmPasswordShow: boolean = false;

  constructor(private router: Router, private usersService: UsersServiceService) {

  }

  ngOnInit(): void {

  }

  createUser(fName: string, lName: string, email: string, password: string) {
    this.user.fName = fName;
    this.user.lName = lName;
    this.user.email = email;
    this.user.password = password;
    this.usersService.createUser(fName, lName, email, password).subscribe((data) =>{
        console.log("x",data);
        // for (let key in data) {
        //     localStorage.setItem(key, JSON.stringify(data[key]));
        //   }
        localStorage.setItem("user1", JSON.stringify(data));
        
        this.router.navigate(['/home'])
    })
    

    // here function that create user with this.user

  }

  passwordHide(element: string) {
    if (element == "password") {
      this.passwordShow = !this.passwordShow;
    }else{
      this.confirmPasswordShow = !this.confirmPasswordShow;
    }
  }


}
