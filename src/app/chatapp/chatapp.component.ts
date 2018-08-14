import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '../../../node_modules/@types/selenium-webdriver/http';
@Component({
  selector: 'app-chatapp',
  templateUrl: './chatapp.component.html',
  styleUrls: ['./chatapp.component.css']
})
export class ChatappComponent implements OnInit {


  constructor(private router: Router, private authService: AuthService) { }

  authenticate() {
    this.authService.setJson().subscribe(response => {
      console.log(response)
    },
      err => {
        console.log(err);
      });
    // console.log("authenticated"+JSON.stringify(this.authService.setJson()));

  }
  newChannel: string;
  addChannel() {
    console.log("new Channel NAme: " + this.newChannel);
    this.authService.addChannel(this.newChannel).subscribe(res => {
      console.log("chennal created " + JSON.stringify(res.sid));
    },
      err => {
        console.log(err);
      });

  }

  channel: string = "";
  RChannel = "";        //when channel found
  carray: any = [];
  msgstore = "";
  arrayLen;
  searchChannel() {
    this.authService.searchChannel().subscribe(res => {
      console.log(res, "check", this.channel);
      //  console.log("len" + res.channels.length);

      for (let index = 0; index < res.channels.length; index++) {
        if (this.channel === res.channels[index].unique_name) {
          console.log("array " + (res.channels[index].sid));
          this.msgstore = res.channels[index].sid;
          this.carray.push(res.channels[index])
        }
        //  console.log(res.channels[index].unique_name)
        //  console.log("channel array: " + this.carray);
        //  console.log("channel name: " + this.channel);
        this.arrayLen = this.carray.length;

        for (let index = 0; index < this.arrayLen; index++) {

          if (this.carray[index] == this.channel) {
            console.log("channel found");
            this.RChannel = this.channel;
            
          
            break;
          }
          else {
            console.log("not found");
            this.RChannel = "channel not found";
          }
        }
      }
    },
      err => {
        console.log();
      })
  }

  joinChannel() {
    
    console.log(this.msgstore);
    this.authService.joinChannel(this.msgstore).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
    alert("Wnat to join")
  }


  myMessage: string;
  sendMessage() {
    if (this.myMessage == " ") {
      return;
    }

    this.authService.sendMessage(this.myMessage, this.url).subscribe(res => {
      console.log(res);
      this.myMessage = "";
     
    },
      err => {
        console.log(err);
      })
      this.getAllMessages(this.url);
  }

  totmsg: number;
  Messagesset: Array<any>;
  url;
  getAllMessages(url) {
    this.url = url;
    this.authService.getAllMessages(url).subscribe(res => {
      this.Messagesset = res.messages;
      // console.log(res.messages.body);
      this.totmsg = res.messages.length;
      console.log("total   " + this.totmsg);
      for (let start = 0; start < this.totmsg; start++) {

        console.log("Msg ", start + " is    " + res.messages[start].body);
        this.Messagesset[start].body = res.messages[start].body;
      }
      //  this.Messagesset=res.messages.body;
    },
      err => {
        console.log(err);
      })
  }


   Logout() {
    localStorage.clear();
    alert("Want to Logout")
    this.router.navigate(['/signin']);
  }

  ngOnInit() {
    this.Messagesset = [];
  }

}
