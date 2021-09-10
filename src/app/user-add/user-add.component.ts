import { Component, OnInit, EventEmitter, Output, Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  username: string = '';
  @Input() usernameedit: string;
  @Input() editIndex: number;
  @Input() isEdit:boolean;
  @Output() userCreated = new EventEmitter<{ username: string }>();
  @Output() userUpdated = new EventEmitter<{ username: string,index:number }>();
  constructor() {
    this.username = '';
    this.usernameedit = '';
    this.editIndex = 0;
    this.isEdit = false;
  }

  ngOnInit(): void {
  }
  ngOnChanges(){
     this.username = this.usernameedit;
     console.log(this.username);
  }
  saveUser() {
    this.userCreated.emit({ username: this.username })
    this.username = '';
  }
  updateUser(){
      this.userUpdated.emit({username:this.username,index:this.editIndex});
      this.username = '';
      this.isEdit = false;
  }
}
