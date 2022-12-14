import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Dating App';
  users:any;

  constructor(private http: HttpClient){}
  ngOnInit(){

    this.getUsers();
  
    // throw new Error('Method not implemented.');
  }

  getUsers()
  {
    this.http.get('http://localhost:5000/api/users').subscribe({next:response=>this.users=response,
    error:error=>console.log(error)
  })

  }

}
