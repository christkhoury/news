import { Component, OnInit } from '@angular/core';
import {ChrisSvc} from 'src/newsSvc'

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  data =  []
  image = []
  constructor(private Russia : ChrisSvc) { }

  ngOnInit(): void {
    this.Russia.callApi2().subscribe((data : any)=>{
      this.data = data;
    })
  }

}
