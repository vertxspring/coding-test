import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import {RegistrationService} from '../registration.service';
import {Router} from '@angular/router';
import { AreasOfInterestComponent } from '../areas-of-interest/areas-of-interest.component';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  sampleList = ['Test data 1','Test data 2','Test data 3','Test data 4','Test data 5','Test data 6','Test data 7','Test data 8'];
  fname: string;
  lname: string;
  email:string;
  confirmEmail:string;
  mobile:string;
  @ViewChild('picklist') picklist: AreasOfInterestComponent;
  constructor(private registerationService:RegistrationService, private router:Router) { }

  ngOnInit() {
  }

  submit(){
    this.registerationService.fname = this.fname;
    this.registerationService.lname = this.lname;
    this.registerationService.email = this.email;
    this.registerationService.confirmEmail = this.confirmEmail;
    this.registerationService.mobile = this.mobile;
    this.registerationService.picklist = this.picklist.dest;
 
    this.router.navigateByUrl('/submit');
  }
}
