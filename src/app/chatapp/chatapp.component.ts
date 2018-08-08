import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';
@Component({
  selector: 'app-chatapp',
  templateUrl: './chatapp.component.html',
  styleUrls: ['./chatapp.component.css']
})
export class ChatappComponent implements OnInit {

  constructor(private router:Router) { }

  Back(){
    this.router.navigate(['/signin']);
  }



  ngOnInit() {
  }

}
