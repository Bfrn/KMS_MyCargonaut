import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { UserService } from '../../services/user.service';
import { Observable, of } from 'rxjs';
import { AlertService } from '../../services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Error } from 'tslint/lib/error';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public username: string = '';
  public password: string = '';

  public user: User;

  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
  }

  login(): void {
    console.log("Username: " + this.username + "Password: " + this.password);
    let data: Object = {username: this.username, password: this.password};
    this.userService.login(data).subscribe(
      (data) => {
        console.log("User was logged in successfully."),
        this.alertService.success("Eingeloggt.", true);
        this.router.navigate(['/register']) //muss angepasst werden
      },
      (error) => {
        console.log("Error logging in the user:");
        this.alertService.error("Fehler beim Einloggen.", error)
    })
  }
}
