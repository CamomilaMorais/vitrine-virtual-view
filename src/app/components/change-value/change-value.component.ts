import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-change-value',
  templateUrl: './change-value.component.html',
  styleUrls: ['./change-value.component.css']
})
export class ChangeValueComponent implements OnInit {

  @Output() changeValue: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.changeValue.emit();
  }

}