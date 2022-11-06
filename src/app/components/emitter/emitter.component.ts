import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {

  myValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeValue() {
    this.myValue = Math.floor(Math.random() * 10);
  }
  
}
