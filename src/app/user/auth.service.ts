import { Injectable } from "@angular/core";
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUser
    loginUser(userName:String, password:String){
        this.currentUser ={
            id: 1,
            firstName: "John",
            lastName: "Papa",
            userName: userName
        }
    }

    isAuthenicated(){
        return !!this.currentUser;
    }

    updateUser(firstName:String, lastName:String){
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }

}