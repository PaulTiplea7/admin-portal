import { Permission } from "./permission.model";

export interface Role {
  id:string,
  name: string,
 creationDate: string
 lastUpdateDate : string,
permissions: Permission[],
}
