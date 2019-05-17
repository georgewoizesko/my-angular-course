import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

import { Subscription } from "rxjs";
import { AuthService } from "../services/auth.service";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styles: []
})
export class NavbarComponent implements OnInit, OnDestroy {
  loginLogoutText = "Login";
  sub: Subscription;

  constructor(private router: Router, private authservice: AuthService) {}

  ngOnInit() {
    this.sub = this.authservice.authChanged.subscribe(
      (loggedIn: boolean) => {
        this.setLoginLogoutText();
      },
      (err: any) => console.log(err)
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loginOrOut() {
    const isAuthenticated = this.authservice.isAuthenticated;
    if (isAuthenticated) {
      this.authservice.logout().subscribe(
        (status: boolean) => {
          this.setLoginLogoutText();
          alert("Logged Out");
          this.router.navigate(["/about"]);
          return;
        },
        (err: any) => console.log(err)
      );
    }
    this.redirectToLogin();
  }

  redirectToLogin() {
    this.router.navigate(["/login"]);
  }

  setLoginLogoutText() {
    this.loginLogoutText = this.authservice.isAuthenticated
      ? "Logout"
      : "Login";
  }
}

