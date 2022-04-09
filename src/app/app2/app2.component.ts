import { Component, OnInit } from '@angular/core';
import {ChrisSvc} from 'src/newsSvc'

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit {

  image = []
  constructor(private Russia : ChrisSvc) { }

  ngOnInit(): void {
    this.Russia.callApi2().subscribe((data : any)=>{
      this.image = data;
    })
  }
}
