import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() user: string;
  @Input() index: number;
  @Output() userRemoved = new EventEmitter<{ index: number }>();
  @Output() userEdit = new EventEmitter<{ index: number }>();
  constructor() {
    this.user = '';
    this.index = 0;
  }

  ngOnInit(): void {
  }
  removeUser(index: number) {
    this.userRemoved.emit({ index: this.index })
  }
  editUser(index: number) {
    this.userEdit.emit({ index: this.index })
  }
}
