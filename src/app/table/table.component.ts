import { Component, OnInit } from '@angular/core';
import {ChrisSvc} from 'src/newsSvc'
@Component({
  selector: 'apptable',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
infected = [];
country = []
  constructor(private Svc : ChrisSvc) { }

  ngOnInit(): void {
    this.Svc.callApi().subscribe((data : any)=>{
      this.infected = data;
    })

  }
  reload(){
    this.ngOnInit()
}

}
