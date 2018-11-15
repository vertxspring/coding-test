import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../registration.service';
@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(private registerationService:RegistrationService) { }

  fname: string;
  lname: string;
  email:string;
  confirmEmail:string;
  mobile:string;
  picklist:any[];
  ngOnInit() {
    this.fname=this.registerationService.fname;
    this.lname=this.registerationService.lname;
    this.email=this.registerationService.email;
    this.confirmEmail=this.registerationService.confirmEmail;
    this.mobile=this.registerationService.mobile;
    this.picklist=this.registerationService.picklist;
  }

}
