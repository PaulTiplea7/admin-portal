import { Injectable } from '@angular/core';
import { LocalService } from './localstorage.service';
import { User } from '../types/user.model';

@Injectable()
export class UsersService {
  constructor(
    private localService: LocalService
  ) {}

  add(user: User) {
    const currentUsers : any = this.localService.get('users');
    if(currentUsers == null){
      const parsedUsers = [];
      parsedUsers.push(user);
      this.localService.save('users', JSON.stringify(parsedUsers));
    }
    else{
      const parsedUsers = JSON.parse(currentUsers)
      parsedUsers.push(user);
      this.localService.save('users', JSON.stringify(parsedUsers));
    }

    return user;
  }
  async update(user: any) {
    const currentUsers : any = this.localService.get('users');
    const parsedUsers = JSON.parse(currentUsers)
    const filteredUsers = await parsedUsers.filter((el: { id: string; }) => el.id !== user.id );
    filteredUsers.push(user);
    this.localService.save('users', JSON.stringify(parsedUsers));
    return user;
  }
  async delete(userId: string) {
    const currentUsers : any = this.localService.get('users');
    const parsedUsers = JSON.parse(currentUsers)
    const filteredUsers = await parsedUsers.filter((el: { id: string; }) => el.id !== userId );
    this.localService.save('users', JSON.stringify(filteredUsers));
    return userId;
  }
  getOne(userId: string) {
    const currentUsers : any = this.localService.get('users');
    const parsedUsers = JSON.parse(currentUsers)
    const user = parsedUsers.find((el: { id: string; }) => el.id === userId);
    return user;
  }
  getAll() {
    const currentUsers : any = this.localService.get('users');
    const parsedUsers = JSON.parse(currentUsers)
    return parsedUsers;
  }
}
