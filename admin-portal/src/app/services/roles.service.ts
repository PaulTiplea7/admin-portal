import { Injectable } from '@angular/core';

export interface Role {}

@Injectable()
export class RolesService {
  constructor() {}

  add(role: Role) {

  }
  update(role: any) {}
  delete(roleId: string) {}
  getOne(roleId: string) {}
  getAll() {}
}
