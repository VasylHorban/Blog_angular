import { user } from './user.interface'
import { userStatus } from './user-status.interface';

export class User  {
    public data : user;
    public allRights : boolean =  false;
    constructor( inputData : user){
        this.data = inputData;
    }
}