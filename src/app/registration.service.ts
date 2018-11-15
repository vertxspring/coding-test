import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  public fname:string;
  public lname:string;
  public email:string;
  public confirmEmail:string;
  public mobile:string;
  public picklist:any[];
  constructor() { }

  
}
