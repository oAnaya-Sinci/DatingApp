import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { on } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private http: HttpClient ){}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.http.get("api/users/").subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
}
