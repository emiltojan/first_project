import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})
export class UserComponent implements OnInit {
  users:User[];

  constructor(private userService:UserService){
    this.userService.getUser().subscribe(users=>{
        this.users = users;
    })
}

  ngOnInit() {
  }

}
