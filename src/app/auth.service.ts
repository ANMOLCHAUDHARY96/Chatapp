import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serviceId: string = "IS895139d28f414ff497c3d1ee5cd248d0";
  chennalList: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic QUNkMTI5ZjVhN2JkZmQ4YjljN2ExYzlmMWJlZWNhMmMyZjpiNTYxOTkzMmQzZGRiNjU0MjE2YmQ0ZWJkMTlmMGI5MA=='
    })
  };
  UserName: string = 'ACe3618cc45b273361e361fd94f72244e6';

  Password: string = '3e1b7dcfda74463fb7d043db6986e3c4';
  ServiceId: string = 'IS895139d28f414ff497c3d1ee5cd248d0';
  url = 'https://chat.twilio.com/v2/Services';


  constructor(private httpClient: HttpClient) { }
  setJson(): Observable<any> {
    return this.httpClient.post(this.url, 'FriendlyName=anmol', this.httpOptions)
  }
  addChannel(newChennal): Observable<any> {
    return this.httpClient.post("https://chat.twilio.com/v2/Services/" + this.serviceId + "/Channels", "FriendlyName=anmol&UniqueName=" + newChennal, this.httpOptions);
  }

  searchChannel(): Observable<any> {
    return this.httpClient.get("https://chat.twilio.com/v2/Services/" + this.serviceId + "/Channels", this.httpOptions).pipe(map(data => data));
  }

  myChannelId:string="CH2e8a3e90caf3440aa3bfa672a0d4a483";
  identity:string="anmol.singh@kelltontech";
  joinChannel(channelId):Observable<any>{
    // this.myChannelId=channelId;
    return this.httpClient.post("https://chat.twilio.com/v2/Services/"+this.serviceId+"/Channels/"+channelId+"/Members","ChannelSid="+channelId+"&Identity="+this.identity+"&ServiceSid="+this.serviceId,this.httpOptions); 
  }


}

