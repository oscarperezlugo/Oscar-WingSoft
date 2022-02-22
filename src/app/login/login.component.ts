import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string = '';
  public password: string = '';

  constructor(public userService: UsersService) {}

  ngOnInit(): void {
  }

  login() {
    console.log(this.email);
    console.log(this.password);

    const user = {user: this.email, pass: this.password};


    let data = JSON.stringify(user);
    this.userService.login(data).subscribe( data => {
      console.log(data);

      localStorage.setItem('token', data.token);
    });
  }

}
