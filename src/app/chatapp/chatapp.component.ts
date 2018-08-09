import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
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
  RChannel = "";
  carray: any = [];
  msgstore = "";
  arrayLen;
  searchChannel() {
    this.authService.searchChannel().subscribe(res => {
      console.log("RES value" + (res.channels[1].unique_name));
      console.log("len" + res.channels.length);

      for (let index = 0; index < res.channels.length; index++) {
        console.log("array " + (res.channels[index].sid));
        this.carray.push(res.channels[index].unique_name)
        console.log("channel array: " + this.carray);
        console.log("channel name: " + this.channel);
        this.arrayLen = this.carray.length;

        for (let index = 0; index < this.arrayLen; index++) {
      
          if (this.carray[index] == this.channel) {
            console.log("channel fopund");
            this.RChannel = this.channel;
            this.msgstore = res.channels[index].sid;
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



  Back() {
    this.router.navigate(['/signin']);
  }

  ngOnInit() {
  }

}
