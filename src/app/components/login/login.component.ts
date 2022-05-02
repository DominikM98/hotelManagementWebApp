import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";

import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [LoginService],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginUser: any[] = [];
  user = {
    login: '',
    role: ''
  };

  userLogin = '';
  userPassword = '';

  isLogin = false;
  isPassword = false;

  ngOnInit(): void {
    this.getUsers();
  }

  constructor(private loginService: LoginService, private router: Router) {
  }

  getUsers(): void {
      this.loginService.getLogin()
          .subscribe(users => {
          this.LoginUser = users;
          })
  }

  checkUser(): void {
      const userSystem = {
          login: this.userLogin,
          password: this.userPassword
      };

      this.loginService.checkLogin(userSystem)
          .subscribe(u => {
            this.user = u;
            localStorage.setItem('user_role', this.user.role);
            console.log(u)
          });

      for (let i = 0; i < this.LoginUser.length; i++) {
          let temp = this.userLogin !== this.LoginUser[i].login;

          if (temp === true){
            this.isLogin = true;
            this.isPassword = false;
          } else{
            this.isLogin = false;
            this.LoginUser[i+1].login = this.userLogin;
            if (this.userPassword !== this.LoginUser[i].password){
              this.isPassword = true;
            } else{
              temp = false;
              this.isLogin = false;
              this.router.navigate(['/startPage']);
              this.clear();
            }
          }
      }
  }

  clear(): void {
    this.userLogin = '';
    this.userPassword = '';
  }

}
