import {User} from '../shared/user/user';
import {Admin} from '../shared/user/admin.user';

export const users = [
    new User ({name : 'Vitaliy', surname : 'Kostiv', password :'qweQ1', id : 0 , email : 'nameoks@gmail.com', login : 'Kostiv', sex : 'man'}),
    new Admin ({name : 'Admin', surname : '!', password :'admin', id : 1 , email : 'superadmin@gmail.com', login : 'Admin', sex : 'man'})
]


