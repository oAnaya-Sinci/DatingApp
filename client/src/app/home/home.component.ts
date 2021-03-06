import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  // users: any;

  constructor(/* private http: HttpClient */) { }

  ngOnInit(): void {
    // this.getusers();
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  /* getusers(){
    this.http.get('api/users').subscribe(users => this.users = users);
  } */

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }
}
