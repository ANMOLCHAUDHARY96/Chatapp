import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import{HttpClient,HttpHeaders}from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serviceId:string="ISc9f91d2d99c442df832ea6a549cc490d";
  chennalList:any;
 
httpOptions={
  header:new HttpHeaders({
    'Content-Type':'application/x-www-form-urlencoded',
    'Authorization':'Basic QUNkMTI5ZjVhN2JkZmQ4YjljN2ExYzlmMWJlZWNhMmMyZjpiNTYxOTkzMmQzZGRiNjU0MjE2YmQ0ZWJkMTlmMGI5MA=='
  })
}


  constructor(private httpClient:HttpClient) { }
  setJson():Observable<any>{
  return this.httpClient.post("https://chat.twilio.com/v2/Services","FriendlyName=anmol",this.httpOptions)
}
addChennal():Observable<any>{
  return this.httpClient.post("https://chat.twilio.com/v2/Services","FriendlyName=Akashy",this.httpOptions);
}
}
