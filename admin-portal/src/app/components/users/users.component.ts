import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';
import {v4 as generateUuid} from 'uuid';
import { User } from 'src/app/types/user.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Organisation } from 'src/app/types/organisation.model';
import { Role } from 'src/app/types/role.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  show : boolean = false;
  users : User[] | undefined;
  roles: Role[] | undefined;
  organisations : Organisation[] | undefined;

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(){}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openModal(){
    this.show = !this.show;
  }
  generateId(){

  }

createUser(){

  const user: User = {
        id: "",
      name: "",
      email: "",
    creationDate: "",
    lastUpdateDate : "",
    organisationId :"",
    roleId : ""
  }


}


}
