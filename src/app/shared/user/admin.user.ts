import { user } from './user.interface';
import { User } from './user';
export class Admin extends User{
    public allRights : boolean = true;
    constructor(data : user){
        super(data)
    
    }
}