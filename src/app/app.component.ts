import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users';
  users: string[] = [];
  username: string = '';
  index: number = 0;
  isEdit: boolean = false;

  onSaveUser(userData: { username: string }) {
    this.users.push(userData.username);
  }
  onRemoveUser(userData: { index: number }) {
    this.users.splice(userData.index, 1);
  }
  onEditUser(userData: { index: number }) {
    this.username = this.users[userData.index];
    this.index = userData.index;
    this.isEdit = true;
  }
  onUserUpdate(userData: { username: string; index: number }) {
    this.users[userData.index] = userData.username;

  }
}
