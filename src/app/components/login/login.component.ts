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

      const user = this.LoginUser.find(u => u.login == userSystem.login);

      console.log('U:',this.LoginUser)
      console.log('u:',user)
      console.log('UL:',this.userLogin)
      console.log('ul:',user.login)
      console.log('UP:',this.userPassword)
      console.log('up:',user.password)


      if(this.userLogin !== user.login){
          this.isLogin = true;
          this.isPassword = false;
      }else {
          this.isLogin = false;
          if (this.userPassword !== user.password){
              this.isPassword = true;
          }else{
              this.loginService.checkLogin(userSystem)
                  .subscribe(u => {
                      this.user = u;
                      localStorage.setItem('user_role', this.user.role);
                      console.log(u)
                  });
              this.isLogin = false;
              this.isPassword = false;
              this.clear();
              this.router.navigate(['/startPage']);
              //this.clear();
          }

      }

      /*for (let i = 0; i < this.LoginUser.length; i++) {
          let temp = this.userLogin !== this.LoginUser[i].login;

          if (temp){
            this.isLogin = true;
            this.isPassword = false;
          } else{
            this.isLogin = false;
            this.LoginUser[i+1].login = this.userLogin;
            if (this.userPassword !== this.LoginUser[i].password){
              this.isPassword = true;
            } else{
              temp = false;

            }
          }
      }*/
  }

  clear(): void {
    this.userPassword = '';
  }

}
