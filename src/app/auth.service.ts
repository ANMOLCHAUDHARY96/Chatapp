import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  serviceId: string = "ISef8e947913f84527827ef8d6f7805091";
  chennalList: any;
  identity: string = localStorage.getItem("identity");

  UserName: string = 'ACe3618cc45b273361e361fd94f72244e6';

  Password: string = '3e1b7dcfda74463fb7d043db6986e3c4';
  url = 'https://chat.twilio.com/v2/Services';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic QUNlMzYxOGNjNDViMjczMzYxZTM2MWZkOTRmNzIyNDRlNjozZTFiN2RjZmRhNzQ0NjNmYjdkMDQzZGI2OTg2ZTNjNA=='
    })
  };


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

  myChannelId: string = "CH21234e52d6b64777884edd6106b9dbb7";

  joinChannel(channelId): Observable<any> {
    // this.myChannelId=channelId;
    return this.httpClient.post("https://chat.twilio.com/v2/Services/" + this.serviceId + "/Channels/" + channelId + "/Members", "ChannelSid=" + channelId + "&Identity=" + this.identity + "&ServiceSid=" + this.serviceId, this.httpOptions);
  }

  sendMessage(myMessage, msg1): Observable<any> {
    return this.httpClient.post(msg1, "ChannelSid=" + this.myChannelId + "&ServiceSid=" + this.serviceId + "&Body=" + myMessage + "&From=" + this.identity, this.httpOptions);
  }

  getAllChannels(): Observable<any> {
    return this.httpClient
      .get(`${this.url}/${this.serviceId}/Channels`, this.httpOptions)
      .pipe(map(data => data));
  }

  getAllMessages(msg1): Observable<any> {
    return this.httpClient.get(msg1, this.httpOptions).pipe(map(data => data));
  }

  getChannelDetail(myChannelId): Observable<any> {
    return this.httpClient.get("https://chat.twilio.com/v2/Services/" + this.serviceId + "/Channels/" + myChannelId, this.httpOptions).pipe(map(data => data));
  }

  getMembersOfChannel(myChannelId): Observable<any> {
    return this.httpClient.get("https://chat.twilio.com/v2/Services/" + this.serviceId + "/Channels/" + myChannelId + "/Members", this.httpOptions);
  }

}


