import { Injectable } from '@angular/core';

export interface Organisation {}

@Injectable()
export class OrganistionsService {
  constructor() {}

  add(organisation: Organisation) {

  }
  update(organisation: any) {}
  delete(organisationId: string) {}
  getOne(organisationId: string) {}
  getAll() {}
}
