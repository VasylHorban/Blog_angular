import { user } from './user.interface'

export class User  {
    public data : user;
    public allRights : boolean =  false;
    constructor( inputData : user){
        this.data = inputData;
    }
}