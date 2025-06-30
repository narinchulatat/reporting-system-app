import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  newUser = { username: '', password: '', role: 'viewer' };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<any[]>('http://localhost:3000/users').subscribe(data => this.users = data);
  }

  addUser() {
    this.http.post('http://localhost:3000/users', this.newUser).subscribe(() => {
      this.newUser = { username: '', password: '', role: 'viewer' };
      this.fetchUsers();
    });
  }

  deleteUser(id: number) {
    this.http.delete(`http://localhost:3000/users/${id}`).subscribe(() => this.fetchUsers());
  }
}
