import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'profile.component.html',
  styles: [`
    em {float: right; color:red; padding-left:10px;}
    .error input {background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999;}
    .error ::-moz-placeholder { color: #999;}
    .error :-moz-placeholder { color: #999;}
    .error :ms-input-placeholder { color: #999;}
  `]
})
export class ProfileComponent implements OnInit{
  
  profileForm:FormGroup
  private firstName:FormControl
  private lastName:FormControl

  constructor( private auth:AuthService, private route:Router){}

  ngOnInit(){
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z]*')])
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required)
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName(){
    return this.lastName.valid || this.lastName.untouched;
  }

  cancel(){
    this.route.navigate(['/events'])
  }

  save(data){
    console.log(data)
    if(this.profileForm.valid){
      this.auth.updateUser(data.firstName, data.lastName)
      this.route.navigate(['/events'])
    }
  }
       
}